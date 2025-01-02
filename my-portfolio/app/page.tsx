import { About } from "./pages/about";
import { Contact } from "./pages/Contact";
import { Intro } from "./pages/Introduction";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";

export default function Home() {
  return (
    <section>
      <Intro/>
      <Projects projects={[]}/>
      <About/>
      <Skills/>
      <Contact/>
    </section>
  )
}