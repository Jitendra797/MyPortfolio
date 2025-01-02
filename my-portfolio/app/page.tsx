import { About } from "./pages/about";
import { Contact } from "./pages/Contact";
import { Intro } from "./pages/Introduction";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { Testimonials } from "./pages/Testimonals";

export default function Home() {
  return (
    <section>
      <Intro/>
      <Projects projects={[]}/>
      <About/>
      <Skills/>
      <Testimonials/>
      <Contact/>
    </section>
  )
}