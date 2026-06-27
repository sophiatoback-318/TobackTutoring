import { site } from '../lib/content';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', color: 'rgba(255,255,255,0.6)', padding: '3rem 2rem', textAlign: 'center', fontSize: '0.85rem' }}>
      <p style={{ fontFamily: 'Georgia, serif', color: 'var(--gold)', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.75rem' }}>T{site.name}</p>
      <p style={{ maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
        Boutique, data-driven SAT and math tutoring for middle and high school students across Chapel Hill, Durham, Raleigh, Cary, Apex, and the greater Research Triangle.
      </p>
      <p>2026 Toback Tutoring. All rights reserved.</p>
      <p style={{ marginTop: '0.5rem' }}>
        <a href={'mailto:' + site.email} style={{ color: 'var(--gold)', textDecoration: 'none' }}>{site.email}</a>
        {' · '}
        <a href={'sms:' + site.phone} style={{ color: 'var(--gold)', textDecoration: 'none' }}>{site.phoneDisplay}</a>
      </p>
    </footer>
  );
}
