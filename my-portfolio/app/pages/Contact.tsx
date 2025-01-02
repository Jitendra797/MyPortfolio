import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
          </div>
          <div className="mt-4"> {/* Added a spacing div */}
            <Textarea placeholder="Message" rows={4} />
          </div>
          <Button type="submit" className="mt-4">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}