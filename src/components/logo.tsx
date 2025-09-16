import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => (
    <div className={cn("flex items-center gap-2", className)}>
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto text-primary flex-shrink-0">
            <path d="M4 8L12 8" stroke="#10B981" strokeWidth="3" strokeLinecap="round"/>
            <path d="M6 13L16 13" stroke="#10B981" strokeWidth="3" strokeLinecap="round"/>
            <path d="M8 18L20 18" stroke="#10B981" strokeWidth="3" strokeLinecap="round"/>
            <path d="M4 8L12 8" stroke="white" strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round"/>
            <path d="M6 13L16 13" stroke="white" strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round"/>
            <path d="M8 18L20 18" stroke="white" strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round"/>
        </svg>

        <span className="font-headline font-bold text-lg text-foreground whitespace-nowrap">NativeEdge Studio</span>
    </div>
);

export default Logo;
