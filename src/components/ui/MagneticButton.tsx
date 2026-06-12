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
    "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";
  const variants = {
    primary:
      "bg-indigo-500 text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.6)] hover:bg-indigo-400 hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.7)]",
    ghost:
      "glass text-white hover:bg-white/[0.07] hover:border-white/20",
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
