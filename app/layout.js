import './globals.css';

export const metadata = {
  title: 'SAT & Math Tutor in Chapel Hill, NC | Toback Tutoring',
  description: 'Boutique, data-driven SAT and math tutoring in Chapel Hill and the Triangle. Personalized one-on-one prep from a Georgetown economics graduate. Serving Chapel Hill, Durham, Raleigh, Cary, and Apex.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
