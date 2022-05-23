import React, { useState } from 'react';
import { useAuth } from './AuthContext';

export const SignUp = () => {
  const { signUp } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const { email, password, passwordConfirm, username } = e.target.elements;

    if (password.value !== passwordConfirm.value) {
      setError('Passwords do not match');
      return;
    }

    try {
      setError('');
      setLoading(true);
      await signUp(email.value, password.value, username.value);
    } catch (error) {
      console.log(error);
      setError('Failed to create account');
    }
    setLoading(false);
  };

  return (
    <>
      <div>
        <h2>Sign up</h2>
        {error && <p>{error}</p>}
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor='email'>Email:</label>
            <input id='email' type='email' required />
          </div>
          <div>
            <label htmlFor='username'>Username</label>
            <input id='username' type='username' required />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input id='password' type='password' required />
          </div>
          <div>
            <label htmlFor='passwordConfirm'>Confirm Password:</label>
            <input id='passwordConfirm' type='password' required />
          </div>
          <button disabled={loading}>Sign up</button>
        </form>
      </div>
    </>
  );
};
