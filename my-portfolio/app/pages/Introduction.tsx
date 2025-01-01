import { Button } from '@/components/ui/button';

export function Intro() {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold sm:text-6xl">
          Namasthe, I&apos;m Jitendra Maddi.
        </h1>
        <p className="mt-4 text-lg leading-relaxed">
        I&apos;m Jitendra, a software developer intern and undergraduate student, 
        constantly honing my skills through continuous learning and hackathons. 
        I&apos;m passionate about technology and connecting with other developers.
        </p>
        <div className="mt-8">
          <Button className="bg-primary">View Projects</Button>
        </div>
      </div>
    </section>
  );
}