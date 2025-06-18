import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { useState, useEffect } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  totalImages: number;
  currentIndex: number;
  onNext: () => void;
  onPrevious: () => void;
}

const ImageModal = ({ 
  isOpen, 
  onClose, 
  imageUrl, 
  totalImages, 
  currentIndex, 
  onNext, 
  onPrevious 
}: ImageModalProps) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Reset zoom and position when changing images
  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [imageUrl]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case "ArrowLeft":
          onPrevious();
          break;
        case "ArrowRight":
          onNext();
          break;
        case "Escape":
          onClose();
          break;
        case "+":
          setScale(prev => Math.min(prev + 0.5, 3));
          break;
        case "-":
          setScale(prev => Math.max(prev - 0.5, 1));
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onNext, onPrevious, onClose]);

  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      setScale(prev => Math.max(1, Math.min(3, prev + delta)));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full h-[90vh] mx-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-zinc-400 hover:text-zinc-100 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation buttons */}
            {currentIndex > 0 && (
              <button
                onClick={onPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-100 transition-colors bg-black/50 p-2 rounded-full z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}
            {currentIndex < totalImages - 1 && (
              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-100 transition-colors bg-black/50 p-2 rounded-full z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}

            {/* Zoom controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 p-2 rounded-full z-10">
              <button
                onClick={() => setScale(prev => Math.max(1, prev - 0.5))}
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
                disabled={scale <= 1}
              >
                <ZoomOut className="w-6 h-6" />
              </button>
              <span className="text-zinc-400 text-sm">{Math.round(scale * 100)}%</span>
              <button
                onClick={() => setScale(prev => Math.min(3, prev + 0.5))}
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
                disabled={scale >= 3}
              >
                <ZoomIn className="w-6 h-6" />
              </button>
            </div>

            {/* Image counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-zinc-400 text-sm z-10">
              {currentIndex + 1} / {totalImages}
            </div>

            {/* Image container */}
            <div 
              className="relative w-full h-full flex items-center justify-center p-4"
              onWheel={handleWheel}
            >
              <motion.img
                src={imageUrl}
                alt="Full size preview"
                className="max-w-full max-h-full object-contain"
                style={{
                  scale,
                  x: position.x,
                  y: position.y,
                  cursor: scale > 1 ? "grab" : "default",
                }}
                drag={scale > 1}
                dragConstraints={{
                  left: -1000,
                  right: 1000,
                  top: -1000,
                  bottom: 1000,
                }}
                dragElastic={0.1}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
                onClick={(e) => {
                  if (!isDragging && scale > 1) {
                    setPosition({ x: 0, y: 0 });
                  }
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal; 