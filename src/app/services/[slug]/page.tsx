import { services } from '@/lib/data';
import { slugify } from '@/lib/utils';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/page-header';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: slugify(service.title),
  }));
}

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => slugify(s.title) === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
            <div className="p-4 rounded-full bg-secondary">
                <service.icon className="w-10 h-10 text-primary" />
            </div>
            <PageHeader title={service.title} className="mb-0"/>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">{service.description}</p>
            
            <h3 className="text-2xl font-headline mt-12 mb-4">What's Included:</h3>
            <ul className="space-y-3">
                {service.details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{detail}</span>
                    </li>
                ))}
            </ul>

             <div className="mt-12 not-prose text-center bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-headline mb-4">Ready to elevate your business?</h3>
                <p className="text-muted-foreground mb-6">Let's discuss how our {service.title} service can help you achieve your goals.</p>
                <Button asChild size="lg">
                    <Link href="/contact">Get a Free Consultation</Link>
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
