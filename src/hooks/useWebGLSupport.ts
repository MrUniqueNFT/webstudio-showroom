import { useMemo } from "react";
import { useIsMobile, useReducedMotion } from "./useMediaQuery";

function probeWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

/** Derinlik sahnesi sadece desktop + motion-ok + WebGL destekli tarayıcıda açılır. */
export function useWebGLSupport(): boolean {
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();
  const supported = useMemo(probeWebGL, []);
  return supported && !isMobile && !reducedMotion;
}
