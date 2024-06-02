import React from "react";

function FormDemo1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [query, setQuery] = useState("");
  const [btnClicked, setBtnClicked] = useState(false);
  return (
    <div>
      <h1>Form Demo 1</h1>
      <form>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='address'>Address</label>
          <textarea
            id='address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='query'>Query</label>
          <select
            id='query'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          >
            <option value=''>--Select--</option>
            <option value='product'>Product</option>
            <option value='promo'>Promo</option>
            <option value='about'>About</option>
            <option value='contact'>Contact</option>
          </select>
        </div>
        <div>
          <button type='button' onClick={() => setBtnClicked(true)}>
            Submit
          </button>
        </div>
      </form>
      <div>
        <h2>Name: {name}</h2>
        <h2>Email: {email}</h2>
        <h2>Address: {address}</h2>
        <h2>Query: {query}</h2>
        <h2>Button Clicked: {btnClicked ? "Yes" : "No"}</h2>
      </div>
    </div>
  );
}

export default FormDemo1;
