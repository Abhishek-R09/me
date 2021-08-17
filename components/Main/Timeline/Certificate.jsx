import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
  // const theme = useTheme();
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   // <script
  //   //   type="text/javascript"
  //   //   async
  //   //   src="//cdn.credly.com/assets/utilities/embed.js"
  //   // />;
  //   script.src = '//cdn.credly.com/assets/utilities/embed.js';
  //   script.async = true;
  //   script.defer = true;

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  // console.log(theme.breakpoints.down('lg'));
  // const belowLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  // console.log(belowLG);
  return (
    <div className={classes.certificate}>
      {/* <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id="c31dc413-42f0-4068-a70c-504728b8268a"
        data-share-badge-host="https://www.credly.com"
      /> */}
      {/* <Card className={classes.root} raised>
        <CardActionArea>
          <CardMedia
            image="/static/images/aws-certified-cloud-practitioner.png"
            title="AWS Certified Cloud Practitioner Badge"
            className={classes.media}
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="h2">
              AWS Certified Cloud Practitioner
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Issued By: Amazon Web Services Training and Certification
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Completed: '10th August, 2021'
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
          <Button
            href="https://www.credly.com/badges/c31dc413-42f0-4068-a70c-504728b8268a/public_url"
            size="small"
            color="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Badge
          </Button>
        </CardActions>
      </Card> */}
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
