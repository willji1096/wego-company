import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center h-7 px-3 rounded-full border border-border text-[12px] font-medium tracking-[0.06em] text-muted bg-white/70 backdrop-blur-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
