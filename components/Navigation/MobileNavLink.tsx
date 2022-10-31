import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { classNames } from '../../helpers/classNames';

type MobileNavigationLinkProps = {
  href: string;
  name: string;
  close: Function;
};

const MobileNavigationLink = ({
  href,
  name,
  close,
}: MobileNavigationLinkProps) => {
  const router = useRouter();
  return (
    <Link href={href} passHref>
      <Disclosure.Button
        as="span"
        className={classNames(
          router.pathname == `${href}`
            ? 'bg-gray-900 text-white'
            : 'text-gray-300 hover:bg-gray-600 hover:text-white',
          'block rounded-md px-3 py-2 text-base font-medium'
        )}
        aria-current={router.pathname == `${href}` ? 'page' : undefined}
        onClick={() => close()}
      >
        {name}
      </Disclosure.Button>
    </Link>
  );
};

export default MobileNavigationLink;
