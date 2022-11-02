import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { classNames } from '../../helpers/classNames';
import { RubikRegular } from '../../helpers/fonts';

type MobileNavigationLinkProps = {
  href: string;
  name: string;
  close: Function;
  scrollFunc: Function;
};

const MobileNavigationLink = ({
  href,
  name,
  close,
  scrollFunc,
}: MobileNavigationLinkProps) => {
  const router = useRouter();
  return (
    <span
      // as="span"
      className={classNames(
        'text-slate-400 hover:bg-gray-600 hover:text-emerald-300',
        'block rounded-md px-3 py-2 text-base font-medium',
        RubikRegular.className
      )}
      onClick={(e) => {
        // console.log(href);
        scrollFunc(href);
        close();
        return e;
      }}
    >
      {name}
    </span>
  );
};

export default MobileNavigationLink;
