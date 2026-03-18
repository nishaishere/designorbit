import { useState } from 'react';
import { contactAPI } from '../services/api.js';
import { FadeUp, SectionLabel } from './UI.jsx';
import styles from './ContactForm.module.css';

const SERVICES = [
  'Web Development',
  'Branding',
  'Software / AI',
  '3D Animation',
  'Other',
];

const BUDGETS = ['< $5K', '$5K–$15K', '$15K–$50K', '$50K+'];

const INITIAL = {
  name: '', email: '', phone: '',
  company: '', service: '', budget: '',
  message: '',
};

export default function ContactForm() {
  const [form,    setForm]    = useState(INITIAL);
  const [errors,  setErrors]  = useState({});
  const [status,  setStatus]  = useState('idle'); // idle | loading | success | error
  const [apiMsg,  setApiMsg]  = useState('');

  const set = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.service)        e.service = 'Please select a service';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 10) e.message = 'Message too short (min 10 chars)';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('loading');
    setApiMsg('');

    try {
      const res = await contactAPI.submit(form);
      setStatus('success');
      setApiMsg(res.message);
      setForm(INITIAL);
    } catch (err) {
      setStatus('error');
      setApiMsg(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className={styles.section}>
      {/* bg decoration */}
      <div className={styles.bgDeco} aria-hidden>
        <div className={styles.bgLine1} />
        <div className={styles.bgLine2} />
      </div>

      <div className={styles.inner}>
        {/* Left col */}
        <div className={styles.left}>
          <FadeUp>
            <SectionLabel>Let's Build</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className={styles.heading}>
              Ready For<br />
              <span className={styles.accentText}>What's Next?</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className={styles.sub}>
              Tell us about your project. We'll get back to you within 24–48 hours.
            </p>
          </FadeUp>

          {/* Info pills */}
          <FadeUp delay={0.15}>
            <div className={styles.infoList}>
              {[
                { icon: '◆', label: 'hello@designorbit.co' },
                { icon: '◆', label: '2 Q1 spots available' },
                { icon: '◆', label: 'Response within 48h' },
              ].map((item) => (
                <div key={item.label} className={styles.infoItem}>
                  <span className={styles.infoIcon}>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Right col — Form */}
        <FadeUp delay={0.2} className={styles.right}>
          {status === 'success' ? (
            <div className={styles.successBox}>
              <div className={styles.successIcon}>✓</div>
              <h3 className={styles.successTitle}>Message Sent!</h3>
              <p className={styles.successMsg}>{apiMsg}</p>
              <button
                className={styles.resetBtn}
                onClick={() => setStatus('idle')}
              >
                Send Another →
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>

              {/* Row 1 */}
              <div className={styles.row}>
                <Field label="Full Name *" error={errors.name}>
                  <input
                    type="text"
                    placeholder="Alex Johnson"
                    value={form.name}
                    onChange={set('name')}
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  />
                </Field>
                <Field label="Email *" error={errors.email}>
                  <input
                    type="email"
                    placeholder="alex@company.com"
                    value={form.email}
                    onChange={set('email')}
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  />
                </Field>
              </div>

              {/* Row 2 */}
              <div className={styles.row}>
                <Field label="Phone">
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={set('phone')}
                    className={styles.input}
                  />
                </Field>
                <Field label="Company">
                  <input
                    type="text"
                    placeholder="Your Company"
                    value={form.company}
                    onChange={set('company')}
                    className={styles.input}
                  />
                </Field>
              </div>

              {/* Row 3 */}
              <div className={styles.row}>
                <Field label="Service *" error={errors.service}>
                  <select
                    value={form.service}
                    onChange={set('service')}
                    className={`${styles.input} ${styles.select} ${errors.service ? styles.inputError : ''}`}
                  >
                    <option value="">Select a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Budget">
                  <select
                    value={form.budget}
                    onChange={set('budget')}
                    className={`${styles.input} ${styles.select}`}
                  >
                    <option value="">Select budget…</option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Message */}
              <Field label="Message *" error={errors.message}>
                <textarea
                  placeholder="Tell us about your project, goals, and timeline…"
                  rows={5}
                  value={form.message}
                  onChange={set('message')}
                  className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                />
              </Field>

              {/* API error */}
              {status === 'error' && (
                <p className={styles.apiError}>{apiMsg}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <span className={styles.spinner} />
                ) : (
                  'Send Message →'
                )}
              </button>
            </form>
          )}
        </FadeUp>
      </div>
    </section>
  );
}

function Field({ label, error, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, flex: 1 }}>
      <label style={{
        fontFamily: 'var(--font-body)',
        fontSize: 10, fontWeight: 700,
        letterSpacing: '2px', textTransform: 'uppercase',
        color: '#38383f',
      }}>
        {label}
      </label>
      {children}
      {error && (
        <span style={{ fontSize: 12, color: '#ff5050', fontFamily: 'var(--font-body)' }}>
          {error}
        </span>
      )}
    </div>
  );
}
