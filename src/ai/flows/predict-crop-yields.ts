'use server';

/**
 * @fileOverview Predicts crop yields using satellite imagery and AI. Intended for use by government agencies.
 *
 * - predictCropYields - A function that predicts crop yields for a given region.
 * - PredictCropYieldsInput - The input type for the predictCropYields function.
 * - PredictCropYieldsOutput - The return type for the predictCropYields function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PredictCropYieldsInputSchema = z.object({
  region: z
    .string()
    .describe('The geographical region for which to predict crop yields.'),
  cropType: z.string().describe('The type of crop to predict yields for.'),
  satelliteImageryDataUri: z
    .string()
    .describe(
      "Satellite imagery data as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  historicalWeatherDataUri: z
    .string()
    .describe(
      "Historical weather data as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  soilDataUri: z
    .string()
    .describe(
      "Soil data as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type PredictCropYieldsInput = z.infer<typeof PredictCropYieldsInputSchema>;

const PredictCropYieldsOutputSchema = z.object({
  predictedYield: z
    .number()
    .describe('The predicted crop yield in tons per hectare.'),
  confidenceInterval: z
    .number()
    .describe(
      'A measure of the uncertainty of the predicted yield, as a percentage.'
    ),
  recommendations: z
    .string()
    .describe(
      'Recommendations for optimizing crop yields based on the analysis.'
    ),
});
export type PredictCropYieldsOutput = z.infer<typeof PredictCropYieldsOutputSchema>;

export async function predictCropYields(
  input: PredictCropYieldsInput
): Promise<PredictCropYieldsOutput> {
  return predictCropYieldsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'predictCropYieldsPrompt',
  input: {schema: PredictCropYieldsInputSchema},
  output: {schema: PredictCropYieldsOutputSchema},
  prompt: `You are an AI-powered agricultural expert. You are tasked with predicting crop yields for a given region based on satellite imagery, weather data and soil data.

  Region: {{{region}}}
  Crop Type: {{{cropType}}}
  Satellite Imagery Data: {{media url=satelliteImageryDataUri}}
  Historical Weather Data: {{media url=historicalWeatherDataUri}}
  Soil Data: {{media url=soilDataUri}}

  Based on this data, predict the crop yield in tons per hectare, provide a confidence interval as a percentage, and give recommendations for optimizing crop yields.
  Return the output as a JSON object.
  `,
});

const predictCropYieldsFlow = ai.defineFlow(
  {
    name: 'predictCropYieldsFlow',
    inputSchema: PredictCropYieldsInputSchema,
    outputSchema: PredictCropYieldsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
