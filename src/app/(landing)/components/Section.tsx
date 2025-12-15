'use client';

import { forwardRef, HTMLAttributes, useEffect, useState } from 'react';

const Section = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ children, className = '', ...props }, ref) => {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
      const element = (ref as React.RefObject<HTMLElement>)?.current;
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        {
          root: null,
          rootMargin: '-30% 0px -30% 0px',
          threshold: Array.from({ length: 101 }, (_, i) => i / 100)
        }
      );

      observer.observe(element);
      return () => observer.disconnect();
    }, [ref]);

    return (
      <section ref={ref} className={`relative ${className}`} {...props}>
        <div
          data-inview={isInView}
          className="bg-secondary/5 translate-y-24 px-4 py-20 opacity-0 transition-all duration-500 ease-out data-[inview=true]:translate-y-0 data-[inview=true]:opacity-100"
        >
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
