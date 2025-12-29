'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

const teamMembers = [
    {
        name: "Ms. Kajal Kishori",
        role: "Mentor",
        bio: "As a seasoned expert in agricultural policy and rural development, Ms. Kishori provides invaluable mentorship to the Krishi Mitra AI team. Her deep understanding of the agricultural ecosystem ensures our technology is aligned with the real-world needs of farmers and policymakers.",
        icon: "school"
    },
    {
        name: "Sourish Dey",
        role: "School of Computer Eng.; AI ML, Data Analyst",
        bio: "As a data analyst, Sourish is focused on interpreting complex agricultural data to uncover trends and insights. His work is crucial for refining our AI models and ensuring the accuracy of the analytics we provide to our users.",
        icon: "analytics"
    },
    {
        name: "Nitish Kumar Pandit",
        role: "School of Computer Eng., Full Stack – Developer",
        bio: "Nitish is the driving force behind the platform's user interface and overall experience. As the Full Stack Developer, he masterfully crafts the responsive front-end and robust back-end, ensuring a seamless and intuitive application for all users.",
        icon: "code"
    },
    {
        name: "Shivam Prasad",
        role: "School of Computer Eng., ML Developer",
        bio: "Shivam focuses on implementing and fine-tuning the machine learning models that power our platform's predictions. He plays a key role in the research and development of new AI capabilities to address agricultural challenges.",
        icon: "model_training"
    },
    {
        name: "Shubham Kumar Singh",
        role: "School of Computer Eng., Full Stack – Developer",
        bio: "Shubham contributes to both the front-end and back-end development of the platform. His expertise ensures that new features are seamlessly integrated and that the application remains performant and scalable for all users.",
        icon: "integration_instructions"
    }
]

export default function Team() {
  return (
    <section id="team" className="py-24 bg-pattern">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-deep-grey dark:text-white">Our Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-deep-grey/70 dark:text-white/60 font-soft">The minds behind Krishi Mitra AI from KIIT Bhubaneswar.</p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full max-w-6xl mx-auto animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <CarouselContent className="-ml-4">
            {teamMembers.map((member, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                 <div className="group relative flex flex-col text-center p-8 bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.04] hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 h-full">
                    <div className="mb-4">
                        <div className="size-24 mx-auto rounded-full bg-primary/10 dark:bg-light-green/10 flex items-center justify-center text-primary dark:text-light-green transition-all duration-300 group-hover:scale-110">
                        <span className="material-symbols-outlined text-5xl">{member.icon}</span>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold font-heading text-deep-grey dark:text-white">{member.name}</h3>
                    <p className="text-sm text-primary dark:text-light-green font-bold mt-1">{member.role}</p>
                    <p className="mt-4 text-deep-grey/80 dark:text-white/70 font-soft text-base flex-grow">{member.bio}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
