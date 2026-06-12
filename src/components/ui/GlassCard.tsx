import { type ReactNode, type CSSProperties } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/** Premium cam panel kart — yumuşak hover, ince border vurgusu. */
export function GlassCard({ children, className = "", style }: GlassCardProps) {
  return (
    <div style={style} className={`card-premium rounded-2xl ${className}`}>
      {children}
    </div>
  );
}
