import React from 'react';
import Image from 'next/image';

type ProjectCardProps = {
  imgUrl: string;
  imgTitle: string;
  projName: string;
  type: string;
  projLink: string;
  projDesc: string;
};

const ProjectCard = ({
  imgUrl,
  imgTitle,
  projName,
  type,
  projLink,
  projDesc,
}: ProjectCardProps) => {
  return (
    <li className="relative mb-5 rounded-sm shadow-sm shadow-black">
      <div className="relative z-20 p-5">
        <p className="mb-1 font-mono text-emerald-300">Featured</p>
        <h3 className="mb-3 text-lg font-bold text-slate-300">{projName}</h3>
        <div className="mb-3 text-slate-400">
          <p>{projDesc}</p>
        </div>
        <div>
          <ul className="flex list-none flex-wrap">
            <li className="mb-1 mr-1 font-mono text-slate-400">ABC</li>
            <li className="mb-1 mr-1 font-mono text-slate-400">DEF</li>
          </ul>
        </div>
        <div>
          <a href="/">Github</a>
        </div>
      </div>
      <div className="absolute top-0 z-10 h-full w-full rounded-sm bg-emerald-300 opacity-5">
        <div className="relative h-full w-full mix-blend-multiply">
          <Image
            src={`${imgUrl}`}
            alt={imgTitle}
            title={imgTitle}
            layout="fill"
            objectFit="cover"
            objectPosition="0 0"
            // className="mix-blend-multiply grayscale"
          />
        </div>
      </div>
      {/* </Collapse> */}
    </li>
  );
};

export default ProjectCard;
