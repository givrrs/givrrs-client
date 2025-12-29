import Link from 'next/link';

interface IHyperLinkProps extends React.HTMLAttributes<HTMLElement> {
  info?: string;
  hrefText: string;
  href?: string;
}

const HyperLink = ({ href, info, hrefText, className, ...rest }: IHyperLinkProps) => {
  return (
    <div className="flex items-center justify-center space-x-1 text-sm font-light">
      {info && <p className="">{info}</p>}
      <Link href={href || ''} className="hover:underline">
        <p className={`font-medium text-green-600 hover:underline ${className}`} {...rest}>
          {hrefText}
        </p>
      </Link>
    </div>
  );
};

export default HyperLink;
