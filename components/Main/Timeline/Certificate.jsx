import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CertificateItem from './CertificateItem';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '15px auto',
    '& iframe': {
      width: '100% !important',
      '& body': {
        border: '0',
      },
    },
  },
  media: {
    height: 150,
    width: 150,
    margin: 'auto',
  },
  certificate: {
    width: '100%',
    // display: 'flex',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // alignItems: 'flex-start',
    height: 'fit-content',
    // '@media (max-width: 1280px)': {
    //   flexDirection: 'column',
    //   flexWrap: 'nowrap',
    // },
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridTemplateRows: 'auto auto auto',
  },
});

const Certificate = () => {
  const classes = useStyles();
  return (
    <div className={classes.certificate}>
      <CertificateItem
        title="AWS Certified Cloud Practitioner"
        platform="Amazon Web Services Training and Certification"
        completed="10th August, 2021"
        link="https://www.credly.com/badges/c31dc413-42f0-4068-a70c-504728b8268a/public_url"
        imageURL="/static/images/aws-certified-cloud-practitioner.png"
        imageTitle="AWS Certified Cloud Practitioner Badge"
        className="AWS"
        // style={{ gridColumn: '1 / span 3' }}
      />
      <CertificateItem
        title="Web Design for Everybody: Basics of Web Development & Coding Specialization"
        platform="Coursera"
        completed="July 2020"
        link="https://coursera.org/share/cb160e0cca20385b819f184fcfb664f0"
        className="design"
        // style={{ gridColumn: belowLG ? '1 / span 3' : '' }}
      />
      <CertificateItem
        title="The Complete 2020 Web Development Bootcamp"
        platform="Udemy"
        completed="November 2020"
        link="https://www.udemy.com/certificate/UC-debdee0e-cb0a-44f4-bebe-ae3f23888c29/"
        className="web"
        // style={{
        //   gridColumn: belowLG ? '1 / span 3' : '3 / span 1',
        // }}
      />
    </div>
  );
};

export default Certificate;
