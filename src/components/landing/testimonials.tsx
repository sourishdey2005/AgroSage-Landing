'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    id: 'testimonial-farmer',
    name: 'Rajinder Singh',
    role: 'Farmer, Punjab',
    quote:
      'AgroSage helped me increase my wheat yield by 15% this season. The weather alerts are incredibly accurate and saved my crop from untimely rain. It feels like having an expert in my pocket.',
  },
  {
    id: 'testimonial-manager',
    name: 'Priya Sharma',
    role: 'Bank Manager, SBI',
    quote:
      "The loan risk engine is a game-changer. We can now assess farmer creditworthiness with much higher confidence, reducing our NPAs and disbursing loans faster to deserving farmers.",
  },
  {
    id: 'testimonial-agent',
    name: 'Anjali Desai',
    role: 'Field Agent, Maharashtra',
    quote:
      "Onboarding farmers is now 5x faster. The app is simple to use, and having all data in one place makes my field surveys much more efficient. I can cover more ground and help more farmers.",
  },
  {
    id: 'testimonial-officer',
    name: 'Arun Kumar',
    role: 'Agriculture Officer, Karnataka',
    quote:
      "Satellite monitoring has given us an unprecedented view of our district's crop health. We can now identify and address potential issues like pest attacks proactively, securing our food supply.",
  },
];

export default function Testimonials() {
  const getImage = (id: string) => PlaceHolderImages.find((img) => img.id === id);

  return (
    <section className="py-24 bg-pattern">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-deep-grey dark:text-white">
            Voices from the Field
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-deep-grey/70 dark:text-white/60 font-soft">
            See how AgroSage is making a real-world impact across India.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              const image = getImage(testimonial.id);
              return (
                <CarouselItem key={testimonial.name}>
                  <div className="p-1">
                    <div className="bg-white dark:bg-deep-grey/20 rounded-xl p-8 md:p-12 shadow-lg shadow-black/[0.02] border border-black/5 dark:border-white/5">
                      <div className="md:flex md:items-start md:gap-12">
                        {image && (
                          <div className="flex-shrink-0 mb-8 md:mb-0">
                            <Image
                              src={image.imageUrl}
                              alt={`Portrait of ${testimonial.name}`}
                              width={120}
                              height={120}
                              className="size-24 md:size-32 rounded-full object-cover mx-auto shadow-lg"
                              data-ai-hint={image.imageHint}
                            />
                          </div>
                        )}
                        <div className="text-center md:text-left">
                          <p className="text-lg md:text-xl font-soft text-deep-grey/90 dark:text-white/80 leading-relaxed">
                            "{testimonial.quote}"
                          </p>
                          <div className="mt-6">
                            <p className="font-bold font-heading text-lg text-deep-grey dark:text-white">
                              {testimonial.name}
                            </p>
                            <p className="text-primary dark:text-light-green font-medium">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
