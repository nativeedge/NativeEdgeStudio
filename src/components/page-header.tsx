import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description?: string;
  className?: string;
};

export default function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("mb-8 md:mb-12", className)}>
      <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">{title}</h1>
      {description && <p className="mt-3 text-lg text-muted-foreground">{description}</p>}
    </div>
  );
}
