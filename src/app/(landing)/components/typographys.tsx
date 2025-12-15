import React, { forwardRef } from 'react';

export const SectionHeading = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <h2
      ref={ref}
      {...rest}
      className={`title mt-6 text-5xl leading-[1.2] font-semibold tracking-tighter md:text-6xl lg:text-7xl ${className}`}
    >
      {children}
    </h2>
  );
});
SectionHeading.displayName = 'SectionHeading';

export const SubHeading = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  (props, ref) => {
    const { children, className, ...rest } = props;
    return (
      <p
        ref={ref}
        {...rest}
        className={`mx-auto mt-4 max-w-2xl leading-relaxed text-neutral-600 md:text-xl ${className}`}
      >
        {children}
      </p>
    );
  }
);

SubHeading.displayName = 'SubHeading';
