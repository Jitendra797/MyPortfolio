import { Contact } from "./pages/Contact";
import { Intro } from "./pages/Introduction";
import { Projects } from "./pages/Projects";

export default function Home() {
  return (
    <section>
      <Intro/>
      <Projects projects={[]}/>
      <Contact/>
    </section>
  )
}