import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { slugify } from "@/lib/utils";
import PageHeader from "@/components/page-header";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { format } from 'date-fns';
import TopicGenerator from "./topic-generator";

export default function BlogPage() {
    const postImages = blogPosts.map(post => ({ ...post, image: PlaceHolderImages.find(p => p.id === post.imageId) }));

    return (
        <div className="container py-12 md:py-16">
            <PageHeader
                title="DevCore Blog"
                description="Insights, industry news, and company updates from our team of experts."
            />
            
            <section className="mb-16">
                <TopicGenerator />
            </section>

            <section>
                <h2 className="text-2xl font-headline font-semibold mb-8">Recent Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postImages.map(post => (
                        post.image && (
                            <Link key={post.id} href={`/blog/${slugify(post.title)}`} className="group">
                                <Card className="h-full flex flex-col overflow-hidden">
                                    <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                                        <Image
                                            src={post.image.imageUrl}
                                            alt={post.title}
                                            width={600}
                                            height={400}
                                            data-ai-hint={post.image.imageHint}
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                                        <CardDescription>
                                            By {post.author} on {format(new Date(post.date), 'MMMM d, yyyy')}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        )
                    ))}
                </div>
            </section>
        </div>
    );
}
