import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    name: "Hardeep Singh",
    role: "Farmer, Punjab",
    quote: "AgroSage's yield prediction helped me plan my harvest better than ever. My profits have increased by 20%!",
    avatarId: "testimonial-farmer",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Agriculture Officer, Karnataka",
    quote: "The satellite monitoring dashboard is a game-changer for policy implementation and tracking crop health at a district level.",
    avatarId: "testimonial-officer",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Bank Manager, SBI",
    quote: "The loan risk engine has significantly reduced our NPAs in the agri-sector. It's fast, reliable, and data-driven.",
    avatarId: "testimonial-manager",
    rating: 4,
  },
  {
    name: "Anjali Desai",
    role: "Agri Agent, Maharashtra",
    quote: "Onboarding farmers is now 3x faster with the digital tools. I can manage my entire portfolio from my phone.",
    avatarId: "testimonial-agent",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/50"}`}
      />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-background">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            From the Field to the Front Office
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            See what our partners and users have to say about AgroSage.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const avatar = PlaceHolderImages.find(img => img.id === testimonial.avatarId);
              return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-start justify-between gap-6 p-6 h-full">
                      <StarRating rating={testimonial.rating} />
                      <blockquote className="flex-grow text-base font-body text-foreground">
                        “{testimonial.quote}”
                      </blockquote>
                      <div className="flex w-full items-center gap-4">
                        <Avatar>
                          {avatar && <AvatarImage src={avatar.imageUrl} alt={testimonial.name} data-ai-hint={avatar.imageHint} />}
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-headline font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )})}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
