import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services, testimonials, caseStudies } from "@/lib/data";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import PageHeader from "@/components/page-header";

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-1');
  const caseStudyImages = caseStudies.map(cs => ({...cs, image: PlaceHolderImages.find(p => p.id === cs.imageId)}));

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section className="container pt-16 md:pt-24 text-center">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
          <span className="animated-gradient-text">Build. Launch. Scale.</span>
          <br />
          Your Vision, Engineered.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          DevCore is your strategic partner in crafting exceptional software solutions that drive growth and innovation. From concept to code, we bring your ideas to life.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/services">Our Services</Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="container">
        <PageHeader 
            title="What We Do"
            description="We offer a comprehensive suite of software development services."
            className="text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map((service) => (
            <Card key={service.id} className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-full bg-secondary mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardHeader className="p-0">
                    <CardTitle className="text-xl font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                    <p className="text-muted-foreground text-sm">{service.shortDescription}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Mission Statement */}
      <section className="bg-muted py-16 md:py-24">
          <div className="container text-center max-w-4xl mx-auto">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg md:text-xl text-foreground/80">
                  To empower businesses with transformative technology, building robust and scalable solutions that stand the test of time. We believe in partnership, transparency, and a relentless pursuit of excellence.
              </p>
          </div>
      </section>

      {/* Case Studies Preview */}
      <section className="container">
        <PageHeader 
            title="Success Stories"
            description="See how we've helped our clients achieve their goals."
            className="text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudyImages.slice(0, 3).map((study) => (
            study.image && (
              <Link key={study.id} href={`/case-studies`}>
                <Card className="overflow-hidden group">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <Image src={study.image.imageUrl} alt={study.title} width={600} height={400} data-ai-hint={study.image.imageHint} className="object-cover group-hover:scale-105 transition-transform duration-300"/>
                  </div>
                  <CardHeader>
                    <CardTitle>{study.title}</CardTitle>
                    <CardDescription>{study.client}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            )
          ))}
        </div>
        <div className="text-center mt-8">
            <Button asChild variant="outline">
                <Link href="/case-studies">View All Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <PageHeader 
              title="What Our Clients Say"
              description="Real feedback from our valued partners."
              className="text-center"
          />
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between">
                      <CardContent className="p-6">
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-accent fill-accent" />)}
                        </div>
                        <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                      </CardContent>
                      <CardHeader className="flex flex-row items-center gap-4">
                        <Avatar>
                          <AvatarImage src={`https://picsum.photos/seed/t${index}/40/40`} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-base">{testimonial.name}</CardTitle>
                          <CardDescription>{testimonial.company}</CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container text-center py-16">
        <PageHeader 
            title="Ready to Start Your Project?"
            description="Let's build something amazing together. Reach out to us today."
        />
        <Button asChild size="lg">
          <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </section>
    </div>
  );
}
