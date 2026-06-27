export default function About() {
  return (
    <section id="about" style={{ padding: '5rem 2rem', background: 'white' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p style={{ color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Meet Your Tutor</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', fontWeight: 'bold', color: 'var(--navy)', marginBottom: '1.5rem' }}>Hi, I am Sophia.</h2>
            <p style={{ color: '#4b5563', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>
              I am a recent Georgetown University graduate with a degree in economics. I have spent my academic and professional life living in the world of numbers, through coursework in finance, statistics, and economics, and through analytical work in real estate.
            </p>
            <p style={{ color: '#4b5563', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>
              I built my data-driven tutoring system because I was frustrated by how much test prep relies on guesswork. By tracking exactly which questions a student misses and why, every session becomes intentional. Rigorous, but warm.
            </p>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '0.95rem' }}>
              I am also deeply passionate about financial literacy. The same math skills that help students ace the SAT are the foundation of lifelong financial independence, and I am committed to making that connection real for every student I work with.
            </p>
            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div><p style={{ color: 'var(--gold)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Education</p><p style={{ color: 'var(--navy)', fontSize: '0.875rem' }}>B.A. Economics, Georgetown University</p></div>
              <div><p style={{ color: 'var(--gold)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Based in</p><p style={{ color: 'var(--navy)', fontSize: '0.875rem' }}>Chapel Hill, North Carolina</p></div>
