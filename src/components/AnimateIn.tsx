"use client";

import { useEffect, useRef, useState } from "react";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

type Direction = "up" | "down" | "left" | "right" | "scale";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  scaleFrom?: number;
  threshold?: number;
}

function hiddenTransform(direction: Direction, distance: number, scaleFrom: number): string {
  switch (direction) {
    case "up":    return `translateY(${distance}px)`;
    case "down":  return `translateY(-${distance}px)`;
    case "left":  return `translateX(${distance}px)`;
    case "right": return `translateX(-${distance}px)`;
    case "scale": return `scale(${scaleFrom})`;
  }
}

export function AnimateIn({
  children,
  className,
  style,
  delay = 0,
  duration = 1400,
  direction = "up",
  distance = 30,
  scaleFrom = 0.94,
  threshold = 0.15,
}: Props) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity:    visible ? 1 : 0,
        transform:  visible ? "none" : hiddenTransform(direction, distance, scaleFrom),
        transition: `opacity ${duration}ms ${EASE} ${delay}ms, transform ${duration}ms ${EASE} ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
