import Cursor       from './components/Cursor.jsx';
import Navbar       from './components/Navbar.jsx';
import Hero         from './components/Hero.jsx';
import Marquee      from './components/Marquee.jsx';
import Services     from './components/Services.jsx';
import Work         from './components/Work.jsx';
import Stats        from './components/Stats.jsx';
import Stack        from './components/Stack.jsx';
import Testimonials from './components/Testimonials.jsx';
import ContactForm  from './components/ContactForm.jsx';
import Footer       from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Stats />
        <Stack />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
