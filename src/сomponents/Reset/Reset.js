import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth, sendPasswordReset } from '../../firebase';
import './Reset.css';
function Reset() {
  const [email, setEmail] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/dashboard');
  }, [user, loading, navigate]);

  return (
    <div className='reset'>
      <div className='reset__container'>
        <input
          type='email'
          className='reset__textBox'
          value={email}
          pattern='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
          onChange={(e) => setEmail(e.target.value)}
          placeholder='E-mail Address'
        />
        <button
          className='reset__btn'
          onClick={() => sendPasswordReset(email)}
        >
          Send password reset email
        </button>
        <div>
          Don't have an account? <Link to='/register'>Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Reset;
