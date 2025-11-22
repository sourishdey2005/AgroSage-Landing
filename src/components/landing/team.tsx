'use client';
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Sunil Kumar Sawant",
    role: "Mentor",
    bio: "With over 20 years of experience in agricultural technology and data science, Sunil guides the AgroSage team, providing strategic direction and deep industry insights to bridge the gap between technology and on-the-ground farming realities."
  },
  {
    name: "Sourish Dey",
    role: "KIIT Bhubaneswar",
    bio: "As the lead architect of our AI and machine learning models, Sourish specializes in developing predictive analytics for crop yield and risk assessment. His work is pivotal in turning complex data into actionable insights for farmers."
  },
  {
    name: "Himanshu Keshri",
    role: "KIIT Bhubaneswar",
    bio: "Himanshu leads the development of our platform's backend and data engineering pipelines. He focuses on building a scalable, secure, and robust infrastructure capable of handling vast amounts of geospatial and agricultural data."
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
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <Card key={member.name} className="overflow-hidden border-border/50 bg-card/50 text-center transition-shadow hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="flex flex-col justify-center p-6 h-full">
                <p className="font-headline text-xl font-bold text-foreground">{member.name}</p>
                <p className="mt-1 font-body text-sm text-primary">{member.role}</p>
                <p className="mt-4 font-body text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
