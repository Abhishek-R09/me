import Image from 'next/image';
import classes from './intro.module.css';
import Typer from '../../UI/Typer/Typer';

const Intro = () => {
  const introTitle = 'Aspiring Full Stack Web Developer';
  const introContent = `I make websites which are responsive and easy to use.`;
  return (
    <div>
      <div className={classes.introImg}>
        <Image
          src="/static/images/marten-bjork-aTt_rNa3gmM-unsplash_edited.jpg"
          alt="Presentation"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className={classes.introContent}>
          <h1>
            <Typer dataText={introTitle} />
          </h1>
          <hr />
          <p>{introContent}</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
