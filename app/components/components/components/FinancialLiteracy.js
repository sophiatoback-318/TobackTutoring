'use client';
import { financialLiteracy as fl } from '../lib/content';

const pillars = [
  {
    title: 'Budgeting Basics',
    desc: 'Real-world money skills: income vs. expenses, needs vs. wants, and how to build a simple budget that actually works.',
  },
  {
    title: 'Math With Meaning',
    desc: 'Percentages, interest, and ratios taught through the lens of money so students see exactly why math matters outside the classroom.',
  },
  {
    title: 'Community Partnerships',
    desc: 'Open to collaborating with local schools, nonprofits, and youth organizations to bring financial literacy workshops to students who need them most.',
  },
];

export default function FinancialLiteracy() {
  return (
    <section id="financial-literacy" style={{ padding: '5rem 2rem', background: 'var(--cream)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ background: 'rgba(201,168,76,0.2)', color: 'var(--gold)', padding: '0.25rem 1rem', borderRadius: '999px', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Beyond Test Prep
          </span>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', fontWeight: 'bold', color: 'var(--navy)', margin: '1rem 0 0.75rem' }}>
            {fl.heading}
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: '#4b5563', lineHeight: 1.7 }}>
            {fl.subheading}
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {pillars.map(p => (
            <div key={p.title} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '1rem', padding: '1.75rem', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--navy)', fontWeight: 'bold', marginBottom: '0.5rem' }}>{p.title}</h3>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ background: 'var(--navy)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.75rem' }}>
            {fl.partnerHeading}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            {fl.partnerBody}
          </p>
          <a href="#contact" style={{ background: 'var(--gold)', color: 'var(--navy)', padding: '0.75rem 2rem', borderRadius: '999px', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.875rem' }}>
            {fl.partnerCta}
          </a>
