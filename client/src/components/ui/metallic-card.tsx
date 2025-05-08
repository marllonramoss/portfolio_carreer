import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type MetallicCardProps = {
  children: ReactNode;
  className?: string;
};

const MetallicCard = ({ children, className }: MetallicCardProps) => {
  return (
    <div className={cn("metallic-border", className)}>
      <div className="bg-zinc-900 rounded-lg p-6 h-full">{children}</div>
    </div>
  );
};

export default MetallicCard;
