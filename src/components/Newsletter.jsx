import { useState } from 'react';
import { subscribeAPI } from '../services/api.js';
import styles from './Newsletter.module.css';

export default function Newsletter() {
  const [email,  setEmail]  = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [msg,    setMsg]    = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus('error');
      setMsg('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    try {
      const res = await subscribeAPI.subscribe(email);
      setStatus('success');
      setMsg(res.message);
      setEmail('');
    } catch (err) {
      setStatus('error');
      setMsg(err.message || 'Something went wrong.');
    }
  };

  return (
    <div className={styles.wrap}>
      <p className={styles.label}>Stay in orbit</p>
      <p className={styles.sub}>Get updates on new projects and insights.</p>

      {status === 'success' ? (
        <p className={styles.successMsg}>✓ {msg}</p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
            className={styles.input}
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            className={styles.btn}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? '…' : '→'}
          </button>
        </form>
      )}

      {status === 'error' && (
        <p className={styles.errorMsg}>{msg}</p>
      )}
    </div>
  );
}
