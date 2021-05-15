import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classes from './Typer.module.css';

const TYPING_SPEED = 150;

const Typer = (props) => {
  const { dataText } = props;
  const [text, setText] = useState('');

  const handleType = () => {
    const fullText = dataText;
    setText(fullText.substring(0, text.length + 1));
  };

  useEffect(() => {
    setTimeout(() => {
      handleType();
    }, TYPING_SPEED);
  }, [handleType]);
  return (
    <>
      <span>{text}</span>
      <span className={classes.cursor} />
    </>
  );
};

Typer.propTypes = {
  dataText: PropTypes.string.isRequired,
};

export default Typer;
