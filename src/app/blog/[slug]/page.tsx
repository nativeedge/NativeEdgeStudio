import { blogPosts } from '@/lib/data';
import { slugify } from '@/lib/utils';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/page-header';
import { format } from 'date-fns';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CardDescription } from '@/components/ui/card';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: slugify(post.title),
  }));
}

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => slugify(p.title) === params.slug);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find(p => p.id === post.imageId);

  return (
    <div className="container py-12 md:py-16">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
            <PageHeader title={post.title} />
            <CardDescription>
                By {post.author} on {format(new Date(post.date), 'MMMM d, yyyy')}
            </CardDescription>
            {image && (
                 <div className="mt-8 rounded-lg overflow-hidden aspect-video">
                    <Image
                        src={image.imageUrl}
                        alt={post.title}
                        width={1200}
                        height={675}
                        data-ai-hint={image.imageHint}
                        className="object-cover w-full h-full"
                    />
                 </div>
            )}
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">{post.excerpt}</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam.
            </p>
            <h2>A Deeper Dive</h2>
            <p>
                Donec porta diam eu massa. Quisque diam lorem, interdum vitae, dapibus ac, scelerisque vitae, pede. Donec eget tellus non erat lacinia fermentum. Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipiscin elit. Pellentesque sed dolor. Aliquam congue fermentum nisl. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in,auctor ut, ligula. Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis, lobortis dignissim, pulvinar ac, lorem. Vestibulum sed ante.
            </p>
        </div>
      </article>
    </div>
  );
}
