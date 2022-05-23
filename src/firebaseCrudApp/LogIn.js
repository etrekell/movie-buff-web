import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { ForgotPassword } from './ForgotPassword';

export const Login = () => {
  const { logIn } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;

    try {
      setError('');
      setLoading(true);
      await logIn(email.value, password.value);
    } catch (error) {
      console.log(error);
      setError('Failed to sign in');
    }
    setLoading(false);
  };

  return (
    <>
      <div>
        <h2>Log in</h2>
        {error && <p>{error}</p>}
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor='email'>Email:</label>
            <input id='email' type='email' required />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input id='password' type='password' required />
          </div>
          <button disabled={loading} type='signup'>
            Log in
          </button>
        </form>
        <ForgotPassword />
      </div>
    </>
  );
};
