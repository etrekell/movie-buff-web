import React, { useState } from 'react';
import { useAuth } from './AuthContext';

export const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const { email } = e.target.elements;

    try {
      setError('');
      setLoading(true);
      await resetPassword(email.value);
    } catch (error) {
      console.log(error);
      setError('Failed to reset password');
    }
    setLoading(false);
  };

  return (
    <>
      <div>
        <h2>Forgot Password</h2>
        {error && <p>{error}</p>}
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor='email'>Email:</label>
            <input id='email' type='email' required />
          </div>
          <button disabled={loading}>Reset Password</button>
        </form>
      </div>
    </>
  );
};
