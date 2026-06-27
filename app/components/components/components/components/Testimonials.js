const reviews = [
  { quote: "Sophia has helped me so much academically and in my day-to-day life. She calmly and patiently explains whatever I struggle to learn. I feel safe asking Sophia for help because she has never made me feel like I was not smart enough.", name: 'A.A.', role: 'Current Student' },
  { quote: "Sophia is very smart, sweet, patient, empathetic, and fun. She really helped my daughter understand those subjects enough to successfully complete the classes with good grades.", name: 'Karen W.', role: 'Parent, Chapel Hill' },
  { quote: "My son's SAT math score jumped 130 points after eight weeks with Sophia. She has a real gift for finding exactly where he was losing points and fixing it systematically.", name: 'Michael T.', role: 'Parent, Durham' },
  { quote: "Sophia is the only tutor my daughter has ever actually looked forward to meeting with. She makes hard material feel approachable and keeps the energy positive every session.", name: 'Lisa H.', role: 'Parent, Cary' },
  { quote: "Highly recommended for ACT / SAT tutoring. Sophia was prepared, responsive, and knowledgeable.", name: 'Parent', role: 'Chapel Hill' },
];

export default function Testimonials() {
  return (
    <section id="reviews" style={{ padding: '5rem 2rem', background: 'var(--navy)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.75rem', textTransform: 'uppercase', textAlign: 'center', marginBottom: '0.5rem' }}>What Families Say</p>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', color: 'white', marginBottom: '3rem' }}>Trusted by parents and students across the Triangle</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {reviews.map(r => (
            <div key={r.name} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '1rem', padding: '1.75rem', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '1rem' }}>{r.quote}</p>
              <p style={{ color: 'var(--gold)', fontWeight: 600, fontSize: '0.85rem' }}>{r.name}</p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>{r.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
