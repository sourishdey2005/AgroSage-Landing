'use client';
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const teamMembers = [
  {
    name: "Sunil Kumar Sawant",
    role: "Mentor",
    imageId: "mentor-sunil"
  },
  {
    name: "Sourish Dey",
    role: "KIIT Bhubaneswar",
    imageId: "member-sourish"
  },
  {
    name: "Himanshu Keshri",
    role: "KIIT Bhubaneswar",
    imageId: "member-himanshu"
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-background">
      <div className="container mx-auto text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Our Team
        </h2>
        <p className="mt-4 font-body text-lg text-muted-foreground">
          The minds behind AgroSage from KIIT Bhubaneswar.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => {
            const image = PlaceHolderImages.find(img => img.id === member.imageId);
            return (
              <Card key={member.name} className="overflow-hidden border-border/50 bg-card/50 text-center transition-shadow hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-0">
                  {image && (
                     <div className="aspect-square relative w-full">
                        <Image
                            src={image.imageUrl}
                            alt={`Portrait of ${member.name}`}
                            fill
                            className="object-cover"
                            data-ai-hint={image.imageHint}
                        />
                     </div>
                  )}
                  <div className="p-6">
                    <p className="font-headline text-xl font-bold text-foreground">{member.name}</p>
                    <p className="mt-1 font-body text-sm text-primary">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
