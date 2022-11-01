import React from 'react';
import Image from 'next/legacy/image';
import GitHubLogo from '../../UI/GitHubLogo';
import { classNames } from '../../../helpers/classNames';
import {
  jetBrainsMonoRegular,
  RubikBold,
  RubikRegular,
} from '../../../helpers/fonts';

type ProjectCardProps = {
  imgUrl: string;
  imgTitle: string;
  projName: string;
  type: string;
  projLink: string;
  projDesc: string;
  techUsed: string[];
  index: number;
};

const ProjectCard = ({
  imgUrl,
  imgTitle,
  projName,
  type,
  projLink,
  projDesc,
  techUsed,
  index,
}: ProjectCardProps) => {
  return (
    // <li className="relative mb-5 rounded-sm shadow-sm shadow-black">
    //   <div className="relative z-20 p-5">
    //     <p
    //       className={classNames(
    //         'mb-1 text-emerald-300',
    //         jetBrainsMonoRegular.className
    //       )}
    //     >
    //       Featured
    //     </p>
    //     <h3
    //       className={classNames(
    //         'mb-3 text-lg text-slate-300',
    //         RubikBold.className
    //       )}
    //     >
    //       {projName}
    //     </h3>
    //     <div
    //       className={classNames('mb-3 text-slate-400', RubikRegular.className)}
    //     >
    //       <p>{projDesc}</p>
    //     </div>
    //     <div>
    //       <ul className="flex list-none flex-wrap">
    //         {techUsed.map((tech) => (
    //           <li
    //             key={tech}
    //             className={classNames(
    //               'mb-1 mr-1 text-slate-400',
    //               jetBrainsMonoRegular.className
    //             )}
    //           >
    //             {tech}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //     <div className="my-2">
    //       <a href="/">
    //         <GitHubLogo fill="text-2xl fill-slate-300 hover:fill-emerald-300" />
    //       </a>
    //     </div>
    //   </div>
    //   <div className="absolute top-0 z-10 h-full w-full rounded-sm bg-emerald-300 opacity-5">
    //     <div className="relative h-full w-full mix-blend-multiply">
    //       <Image
    //         src={`${imgUrl}`}
    //         alt={imgTitle}
    //         title={imgTitle}
    //         layout="fill"
    //         objectFit="cover"
    //         objectPosition="0 0"
    //       />
    //     </div>
    //   </div>
    // </li>
    <li className="relative mb-5 grid grid-cols-12 grid-rows-6 items-center gap-2 last:mb-0">
      <div
        className={classNames(
          'relative z-20 col-span-full row-span-full p-5',
          index % 2 == 0
            ? 'md:col-span-full md:col-start-5 md:items-end md:text-right'
            : 'md:col-end-9 md:even:col-start-1'
        )}
      >
        <p
          className={classNames(
            'mb-1 text-emerald-300',
            jetBrainsMonoRegular.className
          )}
        >
          Featured
        </p>
        <h3
          className={classNames(
            'mb-3 text-lg text-slate-300',
            RubikBold.className
          )}
        >
          {projName}
        </h3>
        <p
          className={classNames(
            'mb-3 rounded-md text-slate-400',
            RubikRegular.className,
            'md:bg-slate-800 md:p-5'
          )}
        >
          {projDesc}
        </p>
        <ul
          className={classNames(
            'flex list-none flex-wrap',
            index % 2 == 0 ? 'md:justify-end' : 'md:justify-start'
          )}
        >
          {techUsed.map((tech) => (
            <li
              key={tech}
              className={classNames(
                'mb-1 mr-1 text-slate-400',
                jetBrainsMonoRegular.className
              )}
            >
              {tech}
            </li>
          ))}
        </ul>
        <div
          className={classNames(
            'my-2 md:flex',
            index % 2 == 0 ? 'md:justify-end' : 'md:justify-start'
          )}
        >
          <a href="/">
            <GitHubLogo fill="text-2xl fill-slate-300 hover:fill-emerald-300" />
          </a>
        </div>
      </div>
      <div
        className={classNames(
          'z-10 col-span-full row-span-full h-full rounded-md bg-emerald-300 opacity-5 md:row-start-3 md:row-end-5 md:opacity-40 md:hover:bg-transparent md:hover:opacity-100',
          index % 2 == 0
            ? 'md:col-end-9 md:even:col-start-1'
            : 'md:col-span-full md:col-start-5'
        )}
      >
        <div className="relative h-full w-full rounded-md mix-blend-multiply">
          <Image
            src={`${imgUrl}`}
            alt={imgTitle}
            title={imgTitle}
            layout="fill"
            objectFit="cover"
            objectPosition="0 0"
            className=" rounded-md"
          />
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
