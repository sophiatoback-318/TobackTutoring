import { site } from '../lib/content';

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '5rem 2rem', background: 'var(--cream)' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Get in Touch</p>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', fontWeight: 'bold', color: 'var(--navy)', marginBottom: '1rem' }}>Book a free consultation</h2>
        <p style={{ color: '#4b5563', marginBottom: '2.5rem', lineHeight: 1.7 }}>Tell me a little about your student and what you are hoping to achieve. No pressure, no obligation. The fastest reply is usually a text.</p>
        <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Email</p>
            <a href={'mailto:' + site.email} style={{ color: 'var(--navy)', textDecoration: 'none', fontWeight: 500 }}>{site.email}</a>
          </div>
          <div>
            <p style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Phone / Text</p>
            <a href={'sms:' + site.phone} style={{ color: 'var(--navy)', textDecoration: 'none', fontWeight: 500 }}>{site.phoneDisplay}</a>
          </div>
        </div>
        <a href={'mailto:' + site.email} style={{ background: 'var(--navy)', color: 'white', padding: '1rem 2.5rem', borderRadius: '999px', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.9rem' }}>
          Send Sophia a Message
        </a>
      </div>
    </section>
  );
}
