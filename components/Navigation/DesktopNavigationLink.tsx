import Link from 'next/link';
import { useRouter } from 'next/router';
import { classNames } from '../../helpers/classNames';
import { RubikRegular } from '../../helpers/fonts';

type DesktopNavigationLinkProps = {
  href: string;
  name: string;
  scrollFunc: Function;
};

const DesktopNavigationLink = ({
  href,
  name,
  scrollFunc,
}: DesktopNavigationLinkProps) => {
  return (
    <span
      onClick={() => scrollFunc(href)}
      className={classNames(
        'text-slate-400 hover:bg-slate-700 hover:bg-opacity-40 hover:text-emerald-300',
        'rounded-md px-3 py-2 text-base font-medium hover:cursor-pointer',
        RubikRegular.className
      )}
    >
      {name}
    </span>
  );
};

export default DesktopNavigationLink;
