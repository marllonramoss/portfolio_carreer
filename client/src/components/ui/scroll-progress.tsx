import { useScrollProgress } from "@/hooks/use-scroll-progress";

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-50">
      <div 
        className="h-full bg-gradient-to-r from-purple-600 to-purple-800" 
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
