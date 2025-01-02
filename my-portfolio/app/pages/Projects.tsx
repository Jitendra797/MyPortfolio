import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Project {
    id: number;
    title: string;
    description: string;
  }

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <h3 className="text-lg font-medium">{project.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}