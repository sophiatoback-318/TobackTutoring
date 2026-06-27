const services = [
  { title: 'SAT Math Prep', desc: 'Targeted Digital SAT math coaching using official College Board questions: algebra, problem-solving, advanced math, and pacing strategy.' },
  { title: 'ACT Math Prep', desc: 'ACT-specific math tutoring with a focus on speed, formula recall, and the question types unique to the ACT format.' },
  { title: 'Algebra I & II', desc: 'Foundational and advanced algebra tutoring covering equations, functions, and the skills the SAT builds on.' },
  { title: 'Geometry', desc: 'High school geometry support covering proofs, coordinate geometry, trigonometry, and visual reasoning.' },
  { title: 'Precalculus', desc: 'Bridging algebra and calculus, covering functions, trig identities, and conceptual depth for STEM tracks.' },
  { title: 'Middle School Math', desc: 'Confidence-building math tutoring for middle schoolers, closing gaps early so high school feels manageable.' },
  { title: 'Homework Help', desc: 'Ongoing homework and concept support in math classes from sixth grade through senior year.' },
  { title: 'Study Skills & Test Strategy', desc: 'Coaching on time management, test anxiety, and strategic habits that turn preparation into performance.' },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: '5rem 2rem', background: 'white' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.75rem', textTransform: 'uppercase', textAlign: 'center', marginBottom: '0.5rem' }}>Tutoring Services</p>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', color: 'var(--navy)', marginBottom: '3rem' }}>From middle school math to test day: covered</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {services.map(s => (
            <div key={s.title} style={{ border: '1px solid #e5e7eb', borderRadius: '1rem', padding: '1.5rem', background: 'var(--cream)' }}>
              <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--navy)', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '1rem' }}>{s.title}</h3>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
