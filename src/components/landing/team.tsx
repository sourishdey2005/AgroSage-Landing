'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const teamMembers = [
  {
    name: "Sourish Dey",
    role: "School of Computer Eng.; AI ML, Data Analyst",
    bio: "As a data analyst, Sourish is focused on interpreting complex agricultural data to uncover trends and insights. His work is crucial for refining our AI models and ensuring the accuracy of the analytics we provide to our users.",
    icon: "analytics",
    portfolioUrl: "https://sourishdeyportfolio.vercel.app/"
  }
]

export default function Team() {
  return (
    <section id="team" className="py-24 bg-pattern">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-deep-grey dark:text-white">Our Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-deep-grey/70 dark:text-white/60 font-soft">The mind behind Krishi Mitra AI from KIIT Bhubaneswar.</p>
        </div>
        
        <div className="max-w-md mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative flex flex-col text-center p-8 bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.04] hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 h-full border border-black/5 dark:border-white/5">
              <div className="mb-4">
                <div className="size-24 mx-auto rounded-full bg-primary/10 dark:bg-light-green/10 flex items-center justify-center text-primary dark:text-light-green transition-all duration-300 group-hover:scale-110">
                  <span className="material-symbols-outlined text-5xl">{member.icon}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold font-heading text-deep-grey dark:text-white">{member.name}</h3>
              <p className="text-sm text-primary dark:text-light-green font-bold mt-1">{member.role}</p>
              <p className="mt-4 text-deep-grey/80 dark:text-white/70 font-soft text-base flex-grow">{member.bio}</p>
              
              {member.portfolioUrl && (
                <div className="mt-6">
                  <Button asChild variant="outline" className="rounded-full gap-2 hover:bg-primary hover:text-white transition-colors">
                    <Link href={member.portfolioUrl} target="_blank" rel="noopener noreferrer">
                      View Portfolio <ExternalLink className="size-4" />
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
