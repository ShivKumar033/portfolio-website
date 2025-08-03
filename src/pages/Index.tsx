import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Certifications from './Certifications';
import Contact from './Contact';

const Index = () => {
  return (
    <Layout>
      <section id="home" className="scroll-mt-16">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-16">
        <About />
      </section>
      <section id="skills" className="scroll-mt-16">
        <Skills />
      </section>
      <section id="projects" className="scroll-mt-16">
        <Projects />
      </section>
      <section id="certifications" className="scroll-mt-16">
        <Certifications />
      </section>
      <section id="contact" className="scroll-mt-16">
        <Contact />
      </section>
    </Layout>
  );
};

export default Index;
