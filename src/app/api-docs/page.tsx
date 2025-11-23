import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/logo";

const apiEndpoints = [
  {
    title: "POST /api/v1/predict-crop-yields",
    description: "Predicts crop yields based on satellite imagery, weather, and soil data.",
    parameters: [
      { name: "region", type: "string", description: "Geographical region for prediction." },
      { name: "cropType", type: "string", description: "The type of crop (e.g., 'Wheat', 'Rice')." },
      { name: "satelliteImageryDataUri", type: "string", description: "Base64 encoded satellite image." },
      { name: "historicalWeatherDataUri", type: "string", description: "Base64 encoded historical weather data." },
      { name: "soilDataUri", type: "string", description: "Base64 encoded soil data." }
    ],
    response: `{
  "predictedYield": 4.5,
  "confidenceInterval": 5,
  "recommendations": "Consider increasing nitrogen levels..."
}`
  },
  {
    title: "POST /api/v1/generate-crop-insights",
    description: "Generates AI-driven insights and recommendations for a specific crop.",
    parameters: [
        { name: "cropType", type: "string", description: "The type of crop." },
        { name: "location", type: "string", description: "The geographical location of the farm." },
        { name: "soilType", type: "string", description: "The type of soil." },
        { name: "growingStage", type: "string", description: "The current growing stage of the crop." },
        { name: "historicalWeatherData", type: "string", description: "Historical weather data for the location." },
        { name: "currentWeatherData", type: "string", description: "Current weather data for the location." },
        { name: "farmerPractices", type: "string", description: "Description of current farming practices." }
    ],
    response: `{
  "potentialYield": "5-6 tons/hectare",
  "recommendations": "Apply a balanced NPK fertilizer...",
  "potentialIssues": "Risk of fungal infection due to high humidity."
}`
  },
  {
    title: "POST /api/v1/analyze-loan-risk",
    description: "Assesses the risk of providing a loan to a farmer.",
    parameters: [
        { name: "farmerData", type: "string", description: "Comprehensive data of the farmer." },
        { name: "marketConditions", type: "string", description: "Current market conditions." },
        { name: "loanAmount", type: "number", description: "The amount of loan requested." }
    ],
    response: `{
  "riskScore": 65,
  "riskFactors": ["High debt-to-income ratio", "Volatile market prices for the proposed crop"],
  "recommendation": "Approve with caution",
  "confidenceLevel": 88
}`
  }
];

export default function ApiDocs() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-40 w-full border-b border-black/5 dark:border-white/5 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="container mx-auto max-w-7xl px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center justify-center">
            <Logo />
          </Link>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tighter text-deep-grey dark:text-white">
              API Documentation
            </h1>
            <p className="max-w-[600px] mx-auto text-deep-grey/70 dark:text-white/60 md:text-xl mt-4 font-soft">
              Integrate AgroSage's intelligence into your own applications.
            </p>
          </div>

          <Card className="bg-white dark:bg-deep-grey/20 border-black/5 dark:border-white/5 shadow-lg">
            <CardHeader>
              <CardTitle className="text-deep-grey dark:text-white">API Endpoints</CardTitle>
              <CardDescription className="text-deep-grey/70 dark:text-white/60 font-soft">
                Our platform exposes the following RESTful API endpoints.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {apiEndpoints.map((endpoint, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="font-heading text-lg text-deep-grey dark:text-white">{endpoint.title}</AccordionTrigger>
                    <AccordionContent className="font-soft">
                      <p className="text-deep-grey/80 dark:text-white/70 mb-4">{endpoint.description}</p>
                      
                      <h4 className="font-bold mt-4 mb-2 text-deep-grey dark:text-white">Parameters:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-deep-grey/80 dark:text-white/70">
                        {endpoint.parameters.map((param, pIndex) => (
                          <li key={pIndex}>
                            <code className="font-mono bg-primary/10 text-primary dark:bg-light-green/10 dark:text-light-green rounded-md px-1.5 py-0.5 text-sm">{param.name}</code>
                            <span className="text-xs italic mx-2">({param.type})</span> - {param.description}
                          </li>
                        ))}
                      </ul>
                      
                      <h4 className="font-bold mt-6 mb-2 text-deep-grey dark:text-white">Example Response:</h4>
                      <pre className="bg-black/80 dark:bg-black/40 text-white text-sm rounded-lg p-4 overflow-x-auto">
                        <code>
                          {endpoint.response}
                        </code>
                      </pre>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
