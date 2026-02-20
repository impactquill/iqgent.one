import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = "", id }: SectionProps) {
  return (
    <section className={`py-20 px-6 ${className}`} id={id}>
      {children}
    </section>
  );
}
