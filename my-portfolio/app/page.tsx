import { Intro } from "./pages/Introduction";
import { Projects } from "./pages/Projects";

export default function Home() {
  return (
    <section>
      <Intro/>
      <Projects projects={[]}/>
    </section>
  )
}