"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { generateBlogTopics, GenerateBlogTopicsOutput } from '@/ai/flows/generate-blog-topics';
import { Loader2, Wand2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function TopicGenerator() {
    const [trends, setTrends] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [results, setResults] = useState<GenerateBlogTopicsOutput | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!trends.trim()) {
            setError('Please enter some industry trends.');
            return;
        }

        setLoading(true);
        setError(null);
        setResults(null);

        try {
            const output = await generateBlogTopics({ industryTrends: trends });
            setResults(output);
        } catch (err) {
            setError('Failed to generate topics. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="bg-muted/50">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                    <Wand2 className="h-6 w-6 text-primary" />
                    <span>AI Blog Topic Generator</span>
                </CardTitle>
                <CardDescription>
                    Enter some current industry trends, and our AI will suggest relevant blog topics and titles.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Textarea
                        placeholder="e.g., 'Edge computing in IoT', 'The rise of WASM', 'Ethical AI development'"
                        value={trends}
                        onChange={(e) => setTrends(e.target.value)}
                        className="min-h-[100px] bg-background"
                        disabled={loading}
                    />
                    <Button type="submit" disabled={loading}>
                        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                        Generate Ideas
                    </Button>
                </form>

                {error && (
                    <Alert variant="destructive" className="mt-4">
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
                
                {results && (
                    <div className="mt-6">
                        <h3 className="text-xl font-headline font-semibold mb-4">Generated Ideas</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-2">Suggested Topics</h4>
                                <ul className="list-disc list-inside space-y-2">
                                    {results.topics.map((topic, index) => (
                                        <li key={index} className="text-muted-foreground">{topic}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Suggested Titles</h4>
                                 <ul className="list-disc list-inside space-y-2">
                                    {results.titles.map((title, index) => (
                                        <li key={index} className="text-muted-foreground">{title}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
