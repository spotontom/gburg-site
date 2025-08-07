'use client';

export default function ContactPage() {
  return (
    <main>
      <h1>Contact Us</h1>
      <p>We’d love to help you plan your perfect Smoky Mountain escape.</p>

      <form
        action="mailto:your.email@example.com"
        method="POST"
        encType="text/plain"
        style={{ maxWidth: '600px' }}
      >
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="name" style={labelStyle}>Full Name</label>
          <input type="text" id="name" name="name" required style={inputStyle} />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="email" style={labelStyle}>Email Address</label>
          <input type="email" id="email" name="email" required style={inputStyle} />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="message" style={labelStyle}>Message</label>
          <textarea id="message" name="message" rows="5" required style={textareaStyle} />
        </div>

        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </main>
  );
}

// 🪵 Custom inline styles for rustic/professional feel:
const labelStyle = {
  display: 'block',
  fontWeight: '600',
  marginBottom: '0.5rem',
  color: '#4b382f',
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  backgroundColor: '#fdfaf7',
  fontSize: '1rem',
};

const textareaStyle = {
  ...inputStyle,
  resize: 'vertical',
};

const buttonStyle = {
  backgroundColor: '#4b382f',
  color: '#fff',
  border: 'none',
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  borderRadius: '6px',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
};

buttonStyle[':hover'] = {
  backgroundColor: '#3a2e2a',
};