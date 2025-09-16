import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => (
    <div className={cn("flex items-center gap-2", className)}>

        <span className="font-headline font-black text-lg animated-gradient-text whitespace-nowrap">NativeEdge Studio</span>
    </div>
);

export default Logo;
