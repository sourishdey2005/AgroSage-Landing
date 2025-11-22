'use server';

/**
 * @fileOverview AI-powered loan risk analysis for banks.
 *
 * - analyzeLoanRisk - Analyzes farmer data to predict loan risks.
 * - AnalyzeLoanRiskInput - Input schema for the analyzeLoanRisk function.
 * - AnalyzeLoanRiskOutput - Output schema for the analyzeLoanRisk function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeLoanRiskInputSchema = z.object({
  farmerData: z
    .string()
    .describe('Comprehensive data of the farmer, including financial history, land details, crop information, and past loan performance.'),
  marketConditions: z
    .string()
    .describe('Current market conditions and economic indicators relevant to agriculture.'),
  loanAmount: z.number().describe('The amount of loan requested by the farmer.'),
});
export type AnalyzeLoanRiskInput = z.infer<typeof AnalyzeLoanRiskInputSchema>;

const AnalyzeLoanRiskOutputSchema = z.object({
  riskScore: z
    .number()
    .describe('A numerical score indicating the risk level associated with the loan (0-100, higher is riskier).'),
  riskFactors: z
    .array(z.string())
    .describe('Key factors contributing to the risk score, such as poor credit history, unstable market conditions, or high debt-to-income ratio.'),
  recommendation: z
    .string()
    .describe('A recommendation on whether to approve or reject the loan, and any specific conditions or precautions.'),
  confidenceLevel: z
    .number()
    .describe('The confidence level of the risk assessment (0-100, higher indicates more certainty).'),
});
export type AnalyzeLoanRiskOutput = z.infer<typeof AnalyzeLoanRiskOutputSchema>;

export async function analyzeLoanRisk(input: AnalyzeLoanRiskInput): Promise<AnalyzeLoanRiskOutput> {
  return analyzeLoanRiskFlow(input);
}

const analyzeLoanRiskPrompt = ai.definePrompt({
  name: 'analyzeLoanRiskPrompt',
  input: {schema: AnalyzeLoanRiskInputSchema},
  output: {schema: AnalyzeLoanRiskOutputSchema},
  prompt: `You are an AI assistant specializing in assessing loan risks for agricultural loans. Analyze the farmer's data, current market conditions, and the loan amount to determine the risk associated with the loan.

Farmer Data: {{{farmerData}}}
Market Conditions: {{{marketConditions}}}
Loan Amount: {{{loanAmount}}}

Based on this information, provide a risk score, identify key risk factors, offer a recommendation, and state your confidence level in the assessment.

Ensure that the output is a valid JSON object conforming to the AnalyzeLoanRiskOutputSchema. The descriptions in the schema define the format, but here is a reminder:
- riskScore: A number between 0 and 100.
- riskFactors: An array of strings with a description of the risk.
- recommendation: String indicating 'Approve', 'Reject', or 'Approve with caution'.
- confidenceLevel: A number between 0 and 100 indicating certainty of the risk assessment.

Output:`,
});

const analyzeLoanRiskFlow = ai.defineFlow(
  {
    name: 'analyzeLoanRiskFlow',
    inputSchema: AnalyzeLoanRiskInputSchema,
    outputSchema: AnalyzeLoanRiskOutputSchema,
  },
  async input => {
    const {output} = await analyzeLoanRiskPrompt(input);
    return output!;
  }
);
