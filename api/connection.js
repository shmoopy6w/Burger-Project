const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '13456789',
    database: 'burger_server',
  });

// conn.connect((err) => {
//     if(err) {
//         console.error('Error connecting to the database: ', err)
//         return
//     }
//     console.log('Connected')
// })

const app = express()
app.use(bodyParser.json());
app.use(cors());

// signup part
app.post('/signup', async (req, res) => {
    const { username, email, phone, address,password } = req.body;
    try {  
      conn.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, email], (err, data) => {
        if(data.length > 0) {
            res.json({message: "details already exists"});
        } else {
            conn.query('INSERT INTO users (username, email, phone_number, address, password) VALUES (?, ?, ?, ?, ?)', [username, email, phone, address, password], (err, data) => {
                if (err) {
                    res.status(400).json({error: "Internal Server Error"});
                } else {
                    res.status(200).json({ message: 'User registered successfully' });
                }
            });
        }
      });
    } catch (error) {
      console.error('Error during user registration:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
});

// login part
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        conn.query('SELECT password FROM users WHERE email = ?', [email], (err, data) => {
            if(err || data.length === 0) {
                res.json({message: "email does not exist"});
            } else {
                if (data[0].password != password){
                    res.json("incorrect password");
                } else {
                    res.status(201).json({ message: 'User logged in successfully' });
                }
            }
        });
    } catch (error) {
        console.error('Error during user login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// order and bill part
app.post('/order', async (req, res) => {
    const { email, username, total, selectedItems } = req.body;
    
    const date = new Date();
    try {
        conn.query('SELECT * FROM users WHERE email  = ? AND username = ?', [email, username], (err, data) => {
            if(err || data.length === 0) {
                
                res.json("email or username do not match with our records");
            } else {
                const getAddressAndPhone = (email, username) => {
                    return new Promise((resolve, reject) => {
                        
                      conn.query('SELECT address, phone_number FROM users WHERE email = ? AND username = ?', [email, username], (err, data) => {
                        if (err) {
                          reject(err);
                        } else {
                            const userData = { address: data[0].address, phone: data[0].phone_number }
                            conn.query('SELECT * FROM bills WHERE email = ? AND username = ?', [email, username], (err, data) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    userData.pastOrders = data
                                    resolve(userData);
                                }
                            })
                        }
                      });
                    });
                  };
                  
                getAddressAndPhone(email, username)
                .then((userData) => {
                    const { address, phone: phone, pastOrders } = userData;
                    const selectedItemsString = JSON.stringify(selectedItems).replace(/['"]/g, '');
                    let pastOrdersString = JSON.stringify(pastOrders);
                    const bill = {username, email, phone, address, total, date, selectedItemsString, pastOrdersString};
                    // console.log(bill)
                    conn.query('INSERT INTO bills (username, email, phone_number, address, total, date, items) VALUES (?, ?, ?, ?, ?, ?, ?)', [username, email, phone, address, total, date, JSON.stringify(selectedItems).replace(/['"]/g, '')], (err, data) => {
                    if(err) {
                        res.status(400).json({error: "Internal Server Error"});
                    } else {
                        res.status(201).json(bill);
                        
                    }
                    })
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
            }
        })
    } catch (error) {
        console.error('Error during user login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
})


// menu part
app.post('/menu', async (req, res) => {
    try {
        const allData= await queryMenuByCategory(conn);
        res.json(
            {allData}
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
    async function queryMenuByCategory( conn) {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM menu`, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    const formattedData = [];
                    data.forEach((v) => {
                        formattedData.push({
                            dish: v.item_name,
                            quantity: 0,
                            price: v.price
                          });
                    });
                    resolve(formattedData);
                }
            });
        });
    }
})

// contact
app.post('/feedback', async (req, res) => {
    const { name, email, message } = req.body;

    conn.query('INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)', [name, email, message], (err, result) => {
        if (err) {
            console.error('MySQL insertion error:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.status(201).json({ status: 'success' });
        }
    });
});

// subscribe
app.post('/subscribe', async (req, res) => {
    const { email } = req.body;
    conn.query('SELECT * FROM subscribers WHERE email = ?', [email], (err, data) => {
        if (err) {
            res.status(500).json('MySQL fetching error')
        }
        if(data.length > 0) {
            res.json('Already subscribed')
        } else {
            conn.query('INSERT INTO subscribers (email) VALUES (?)', [email], (err, result) => {
                if (err) {
                    console.error('MySQL insertion error:', err);
                    res.status(500).json({ error: 'Internal Server Error' });
                } else {
                    res.status(201).json({ status: 'success' });
                }
            });
        }
    })
    
});


const port = 4000
app.listen(port, () => {console.log(`server listening at http://localhost:${port}`)})
