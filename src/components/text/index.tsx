import { HTMLAttributes } from 'react';

interface ITypographyProps<T> extends HTMLAttributes<T> {}

export const Title = ({ className, children, ...rest }: ITypographyProps<HTMLHeadingElement>) => {
  return (
    <h2
      className={`mb-2 scroll-m-20 text-2xl font-medium tracking-tight lg:text-4xl ${className}`}
      {...rest}
    >
      {children}
    </h2>
  );
};

export const SubTitle = ({
  className,
  children,
  ...rest
}: ITypographyProps<HTMLHeadingElement>) => {
  return (
    <h3 className={`mb-2 text-lg font-medium md:text-xl ${className}`} {...rest}>
      {children}
    </h3>
  );
};

export const Paragraph = ({
  className,
  children,
  ...rest
}: ITypographyProps<HTMLParagraphElement>) => {
  return (
    <p className={`text-xs md:text-sm ${className}`} {...rest}>
      {children}
    </p>
  );
};
