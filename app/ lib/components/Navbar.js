'use client';
import { site } from '../lib/content';

export default function Navbar() {
  return (
    <nav style={{ background: 'var(--navy)', position: 'sticky', top: 0, zIndex: 50, padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <a href="#top" style={{ color: 'var(--gold)', fontWeight: 'bold', fontSize: '1.1rem', textDecoration: 'none', fontFamily: 'Georgia, serif' }}>
        T{site.name}
      </a>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        {['Method','Services','Financial Literacy','About','Reviews','Contact'].map(item => (
          <a key={item} href={'#' + item.toLowerCase().replace(' ', '-')}
            style={{ color: 'white', textDecoration: 'none', fontSize: '0.875rem', opacity: 0.85 }}>
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
