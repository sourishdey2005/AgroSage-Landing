'use server';

/**
 * @fileOverview Generates AI-driven insights about crops for farmers.
 *
 * - generateCropInsights - A function that generates crop insights.
 * - GenerateCropInsightsInput - The input type for the generateCropInsights function.
 * - GenerateCropInsightsOutput - The return type for the generateCropInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCropInsightsInputSchema = z.object({
  cropType: z.string().describe('The type of crop.'),
  location: z.string().describe('The geographical location of the farm.'),
  soilType: z.string().describe('The type of soil.'),
  growingStage: z.string().describe('The current growing stage of the crop.'),
  historicalWeatherData: z
    .string()
    .describe('Historical weather data for the location.'),
  currentWeatherData: z.string().describe('Current weather data for the location.'),
  farmerPractices: z.string().describe('Description of current farming practices.'),
});
export type GenerateCropInsightsInput = z.infer<typeof GenerateCropInsightsInputSchema>;

const GenerateCropInsightsOutputSchema = z.object({
  potentialYield: z.string().describe('Predicted potential yield of the crop.'),
  recommendations: z
    .string()
    .describe('Recommendations for improving crop health and yield.'),
  potentialIssues: z.string().describe('Predictions of potential issues affecting the crop.'),
});
export type GenerateCropInsightsOutput = z.infer<typeof GenerateCropInsightsOutputSchema>;

export async function generateCropInsights(input: GenerateCropInsightsInput): Promise<GenerateCropInsightsOutput> {
  return generateCropInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCropInsightsPrompt',
  input: {schema: GenerateCropInsightsInputSchema},
  output: {schema: GenerateCropInsightsOutputSchema},
  prompt: `You are an expert agricultural advisor providing insights to farmers.

  Based on the provided information, generate insights about the crop, including potential yields, recommendations for improvement, and predictions of potential issues.

  Crop Type: {{{cropType}}}
  Location: {{{location}}}
  Soil Type: {{{soilType}}}
  Growing Stage: {{{growingStage}}}
  Historical Weather Data: {{{historicalWeatherData}}}
  Current Weather Data: {{{currentWeatherData}}}
  Farmer Practices: {{{farmerPractices}}}
  `,
});

const generateCropInsightsFlow = ai.defineFlow(
  {
    name: 'generateCropInsightsFlow',
    inputSchema: GenerateCropInsightsInputSchema,
    outputSchema: GenerateCropInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
