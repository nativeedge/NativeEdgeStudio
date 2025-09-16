import PageHeader from "@/components/page-header";
import { teamMembers } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function TeamPage() {
  const teamImages = teamMembers.map(member => ({ ...member, image: PlaceHolderImages.find(p => p.id === member.imageId) }));

  return (
    <div className="container py-12 md:py-16">
      <PageHeader
        title="Meet Our Experts"
        description="The passionate minds behind our innovative solutions."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamImages.map((member) => (
          member.image && (
            <Card key={member.id} className="text-center">
              <CardContent className="p-6">
                <Image
                  src={member.image.imageUrl}
                  alt={member.name}
                  width={150}
                  height={150}
                  data-ai-hint={member.image.imageHint}
                  className="rounded-full mx-auto mb-4 border-4 border-secondary"
                />
                <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                <CardDescription className="text-primary">{member.role}</CardDescription>
                <p className="mt-4 text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          )
        ))}
      </div>
    </div>
  );
}
