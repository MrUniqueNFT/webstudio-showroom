import { AnimatePresence, motion } from "framer-motion";

interface ToastProps {
  show: boolean;
  message: string;
}

export function Toast({ show, message }: ToastProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          role="status"
          aria-live="polite"
          className="glass-strong fixed bottom-8 left-1/2 z-[90] flex -translate-x-1/2 items-center gap-3 rounded-2xl px-6 py-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-sm text-ink">
            ✓
          </span>
          <p className="text-sm font-medium text-white">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
