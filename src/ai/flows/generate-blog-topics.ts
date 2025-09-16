// This file is machine-generated - edit with care!

'use server';

/**
 * @fileOverview An AI agent for suggesting blog topics and titles based on the latest industry trends.
 *
 * - generateBlogTopics - A function that suggests blog topics and titles.
 * - GenerateBlogTopicsInput - The input type for the generateBlogTopics function.
 * - GenerateBlogTopicsOutput - The return type for the generateBlogTopics function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogTopicsInputSchema = z.object({
  industryTrends: z
    .string()
    .describe('The latest industry trends to generate blog topics from.'),
});
export type GenerateBlogTopicsInput = z.infer<typeof GenerateBlogTopicsInputSchema>;

const GenerateBlogTopicsOutputSchema = z.object({
  topics: z
    .array(z.string())
    .describe('A list of suggested blog topics based on the industry trends.'),
  titles: z
    .array(z.string())
    .describe('A list of suggested blog titles for each topic.'),
});
export type GenerateBlogTopicsOutput = z.infer<typeof GenerateBlogTopicsOutputSchema>;

export async function generateBlogTopics(input: GenerateBlogTopicsInput): Promise<GenerateBlogTopicsOutput> {
  return generateBlogTopicsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogTopicsPrompt',
  input: {schema: GenerateBlogTopicsInputSchema},
  output: {schema: GenerateBlogTopicsOutputSchema},
  prompt: `You are a content strategist for a software development company. Generate a list of blog topics and titles based on the following industry trends:

Industry Trends: {{{industryTrends}}}

Format your response as a JSON object with "topics" and "titles" keys. Each should be an array of strings.
`,
});

const generateBlogTopicsFlow = ai.defineFlow(
  {
    name: 'generateBlogTopicsFlow',
    inputSchema: GenerateBlogTopicsInputSchema,
    outputSchema: GenerateBlogTopicsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
