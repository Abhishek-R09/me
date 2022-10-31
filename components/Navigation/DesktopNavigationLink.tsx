import Link from 'next/link';
import { useRouter } from 'next/router';
import { classNames } from '../../helpers/classNames';

type DesktopNavigationLinkProps = {
  href: string;
  name: string;
};

const DesktopNavigationLink = ({ href, name }: DesktopNavigationLinkProps) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      passHref
      aria-current={router.pathname == `${href}` ? 'page' : undefined}
    >
      <span
        className={classNames(
          router.pathname == `${href}`
            ? 'bg-gray-900 text-white'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
          'rounded-md px-3 py-2 text-sm font-medium hover:cursor-pointer'
        )}
      >
        {name}
      </span>
    </Link>
  );
};

export default DesktopNavigationLink;
