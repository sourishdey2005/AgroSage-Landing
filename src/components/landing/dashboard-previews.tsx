import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";

export default function DashboardPreviews() {
  const dashboards = [
    { value: "farmer", label: "Farmer", imageId: "farmer-dashboard" },
    { value: "agent", label: "Agent", imageId: "agent-dashboard" },
    { value: "bank", label: "Bank", imageId: "bank-dashboard" },
    { value: "government", label: "Government", imageId: "gov-dashboard" },
  ];

  const getImage = (id: string): ImagePlaceholder | undefined => {
    return PlaceHolderImages.find(img => img.id === id);
  };

  return (
    <section id="dashboards" className="bg-background">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Actionable Dashboards for Everyone
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            Custom-built interfaces to turn complex data into clear decisions.
          </p>
        </div>

        <Tabs defaultValue="farmer" className="w-full">
          <TabsList className="mx-auto grid w-full max-w-2xl grid-cols-2 md:grid-cols-4">
            {dashboards.map(dash => (
              <TabsTrigger key={dash.value} value={dash.value}>{dash.label}</TabsTrigger>
            ))}
          </TabsList>
          {dashboards.map(dash => {
            const imageData = getImage(dash.imageId);
            return (
              <TabsContent key={dash.value} value={dash.value}>
                <Card className="mt-8 overflow-hidden shadow-2xl shadow-primary/10">
                  {imageData && (
                    <Image
                      src={imageData.imageUrl}
                      alt={imageData.description}
                      data-ai-hint={imageData.imageHint}
                      width={1200}
                      height={800}
                      className="object-cover"
                    />
                  )}
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
