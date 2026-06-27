import { site } from '../lib/content';

export default function Hero() {
  return (
    <section id="top" style={{ background: 'var(--navy)', color: 'white', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div>
          <p style={{ color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Boutique SAT & Math Tutoring
          </p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            {site.tagline}
          </h1>
          <p style={{ opacity: 0.8, marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '1rem' }}>
            Helping students raise scores, build confidence, and actually enjoy learning math through a focused, data-driven approach to test prep.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" style={{ background: 'var(--gold)', color: 'var(--navy)', padding: '0.875rem 2rem', borderRadius: '999px', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.875rem' }}>
              Book a Free Consultation
            </a>
            <a href={'sms:' + site.phone} style={{ border: '2px solid rgba(255,255,255,0.4)', color: 'white', padding: '0.875rem 2rem', borderRadius: '999px', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.875rem' }}>
              Text Sophia
            </a>
          </div>
          <div style={{ display: 'flex', gap: '3rem', marginTop: '3rem', opacity: 0.7, fontSize: '0.8rem' }}>
            <div><strong style={{ display: 'block', color: 'var(--gold)' }}>Georgetown</strong>Economics graduate</div>
            <div><strong style={{ display: 'block', color: 'var(--gold)' }}>1-on-1</strong>Every single session</div>
            <div><strong style={{ display: 'block', color: 'var(--gold)' }}>The Triangle</strong>In person and online</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <img src="/sophia-headshot.jpg" alt="Sophia Toback, SAT tutor Chapel Hill NC"
            style={{ width: '100%', borderRadius: '1rem', objectFit: 'cover', objectPosition: 'top', height: '380px' }} />
          <img src="/georgetown-campus.jpg" alt="Georgetown University campus"
            style={{ width: '100%', borderRadius: '0.75rem', objectFit: 'cover', height: '140px' }} />
        </div>
      </div>
    </section>
  );
}
