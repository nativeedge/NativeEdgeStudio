import Link from "next/link";
import { services } from "@/lib/data";
import { slugify } from "@/lib/utils";
import PageHeader from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-16">
      <PageHeader
        title="Our Services"
        description="We provide a wide range of software development services to help you achieve your business goals."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link key={service.id} href={`/services/${slugify(service.title)}`} className="group">
            <Card className="h-full flex flex-col justify-between hover:border-primary transition-colors">
              <div>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-full bg-secondary">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.shortDescription}</CardDescription>
                </CardContent>
              </div>
              <div className="p-6 pt-0">
                  <p className="text-sm font-medium text-primary group-hover:underline flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
