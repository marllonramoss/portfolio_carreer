import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VisitorTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (visitorType: "curious" | "recruiter", email?: string) => void;
}

export default function VisitorTypeModal({ isOpen, onClose, onSubmit }: VisitorTypeModalProps) {
  const [visitorType, setVisitorType] = useState<"curious" | "recruiter" | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (visitorType) {
      onSubmit(visitorType, email);
      setSubmitted(true);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 w-full max-w-md relative"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold text-zinc-100 mb-4">Welcome to my Portfolio!</h2>
                <p className="text-zinc-300 mb-6">
                  I'd love to know a bit about you! Are you...
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setVisitorType("curious")}
                      className={`min-h-[120px] p-4 rounded-lg border-2 transition-all ${
                        visitorType === "curious"
                          ? "border-purple-500 bg-purple-500/10"
                          : "border-zinc-700 hover:border-purple-500/50"
                      }`}
                    >
                      <div className="flex flex-col h-full justify-center">
                        <h3 className="text-lg font-semibold text-zinc-100">Just Curious</h3>
                        <p className="text-sm text-zinc-400 mt-2">Exploring and learning</p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setVisitorType("recruiter")}
                      className={`min-h-[120px] p-4 rounded-lg border-2 transition-all ${
                        visitorType === "recruiter"
                          ? "border-purple-500 bg-purple-500/10"
                          : "border-zinc-700 hover:border-purple-500/50"
                      }`}
                    >
                      <div className="flex flex-col h-full justify-center">
                        <h3 className="text-lg font-semibold text-zinc-100 leading-tight">
                          Recruiter/<br />Company
                        </h3>
                        <p className="text-sm text-zinc-400 mt-2">Looking to hire</p>
                      </div>
                    </button>
                  </div>

                  {visitorType === "recruiter" && (
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
                        Email (optional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={!visitorType}
                    className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:hover:bg-purple-600 text-white rounded-lg transition-colors"
                  >
                    Continue
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <h2 className="text-2xl font-bold text-zinc-100 mb-4">Thank you!</h2>
                <p className="text-zinc-300">
                  I appreciate you taking the time to share this information.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 