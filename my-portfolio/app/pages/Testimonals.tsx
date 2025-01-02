import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface Testimonial {
  name: string;
  company?: string;
  testimonial: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'John Doe',
    company: 'Company A',
    testimonial: 'This portfolio is amazing!',
  },
  // Add more testimonials
];

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardHeader>
                <h3 className="text-lg font-medium">{testimonial.name}</h3>
                {testimonial.company && (
                  <p className="text-sm">{testimonial.company}</p>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-sm">{testimonial.testimonial}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}