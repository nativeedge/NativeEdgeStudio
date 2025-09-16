import PageHeader from "@/components/page-header";
import { caseStudies } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

export default function CaseStudiesPage() {
  const caseStudyImages = caseStudies.map(cs => ({ ...cs, image: PlaceHolderImages.find(p => p.id === cs.imageId) }));

  return (
    <div className="container py-12 md:py-16">
      <PageHeader
        title="Our Success Stories"
        description="Discover how we've helped businesses like yours overcome challenges and achieve remarkable results."
      />
      <div className="space-y-12">
        {caseStudyImages.map((study) => (
          study.image && (
            <Card key={study.id} className="overflow-hidden md:grid md:grid-cols-2 md:items-center">
              <div className="md:order-last">
                <Image
                  src={study.image.imageUrl}
                  alt={study.title}
                  width={800}
                  height={600}
                  data-ai-hint={study.image.imageHint}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 md:p-8">
                <CardDescription className="font-semibold text-primary">{study.client}</CardDescription>
                <CardTitle className="font-headline text-2xl mt-1">{study.title}</CardTitle>
                <CardContent className="p-0 mt-4 space-y-4">
                  <div>
                    <h4 className="font-semibold">The Challenge</h4>
                    <p className="text-muted-foreground text-sm">{study.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Our Solution</h4>
                    <p className="text-muted-foreground text-sm">{study.solution}</p>
                  </div>
                   <div>
                    <h4 className="font-semibold">The Outcome</h4>
                     <p className="text-muted-foreground text-sm flex items-start gap-2"> 
                      <CheckCircle className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                      <span>{study.outcome}</span>
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          )
        ))}
      </div>
    </div>
  );
}
