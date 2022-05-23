import React, { useState } from 'react';
import { useAuth } from './AuthContext';

export const UpdateProfile = () => {
  const { currentUser } = useAuth();
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
      // await signUp(email.value, password.value, username.value);
    } catch (error) {
      console.log(error);
      setError('Failed to create account');
    }
    setLoading(false);
  };

  return (
    <>
      <div>
        <h2>Update Profile</h2>
        {error && <p>{error}</p>}
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor='email'>Email:</label>
            <input id='email' type='email' defaultValue={currentUser.email ?? ''} />
          </div>
          <div>
            <label htmlFor='username'>Username</label>
            <input id='username' type='username' />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input id='password' type='password' placeholder='Leave Blank to keep the same' />
          </div>
          <div>
            <label htmlFor='passwordConfirm'>Confirm Password:</label>
            <input id='passwordConfirm' type='password' placeholder='Leave Blank to keep the same' />
          </div>
          <button disabled={loading}>Update</button>
        </form>
      </div>
    </>
  );
};
