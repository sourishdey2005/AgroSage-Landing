import { config } from 'dotenv';
config();

import '@/ai/flows/predict-crop-yields.ts';
import '@/ai/flows/generate-crop-insights.ts';
import '@/ai/flows/analyze-loan-risk.ts';