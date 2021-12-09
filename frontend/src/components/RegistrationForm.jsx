import React, { useState } from 'react';

const RegistrationForm = ({ addGuest }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setAge('');

    addGuest({
      name: e.target.value,
      email: e.target.value,
      age: +e.target.value,
    });
  };

  return (
    <div>
      <section>
        <h1>Guest Registration</h1>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label for='name'>Full Name:</label>
            <br />
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
          </div>
          <div>
            <label for='email'>E-mail:</label>
            <br />
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
          </div>

          <div>
            <label for='age'>Age:</label>
            <br />
            <input
              type='text'
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <br />
          </div>

          <div className='submit'>
            <input type='submit' value='Add' />
          </div>
        </form>
      </section>
    </div>
  );
};

export default RegistrationForm;
