import { useRef, type ReactNode, type ButtonHTMLAttributes } from "react";
import { useReducedMotion } from "../../hooks/useMediaQuery";

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "ghost";
}

/** Mouse'a doğru hafifçe çekilen magnetic buton. */
export function MagneticButton({ children, variant = "primary", className = "", ...rest }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.2}px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-all duration-500 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";
  const variants = {
    primary:
      "bg-cream text-ink shadow-[0_12px_36px_-12px_rgba(0,0,0,0.6)] hover:bg-white",
    ghost:
      "border border-white/25 text-white backdrop-blur-sm hover:border-white/50 hover:bg-white/[0.06]",
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
