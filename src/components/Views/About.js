import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FlareRoundedIcon from '@material-ui/icons/FlareRounded';
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';
import SentimentSatisfiedRoundedIcon from '@material-ui/icons/SentimentSatisfiedRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    padding: '70px 0 70px 0',
    backgroundColor: theme.palette.secondary.main,
    textAlign: 'center',
    color: '#fff',
  },

  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontWeight: 300,
    color: '#FFF',
  },
  headerBar: {
    fontWeight: 700,
    backgroundColor: '#fff',
    height: 2,
    width: 70,
    margin: '25px 0 45px 0',
  },
  subHeading: {
    fontWeight: 800,
    color: '#1F2323',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    boxShadow: '0px 15px 55px 0px rgba(0, 0, 0, 0.13)',
    padding: 45,
    borderRadius: 4,
  },
  cardIconContainer: {
    display: 'flex',
    color: '#595959',
    fontSize: 48,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 800,
    color: '#444649',
    marginTop: 20,
    marginBottom: 10,
  },
  cardDescription: { color: '#444649' },
  mainContent: { marginBottom: 32, textAlign: 'left' },
  listItem: {
    display: 'flex',
    marginBottom: 8,
    '& :first-child': {
      marginRight: 16,
    },
  },
  bold: { fontWeight: 'bolder' },
}));

const principles = [
  {
    title: 'Principle 1',
    description:
      'These usually are sophisticated analytical tools that allow you tolikeds dissect',
    icon: <SentimentSatisfiedRoundedIcon fontSize='inherit' />,
  },
  {
    title: 'Principle 2',
    description:
      'These usually are sophisticated analytical tools that allow you tolikeds dissect',
    icon: <VerifiedUserRoundedIcon fontSize='inherit' />,
  },
  {
    title: 'Principle 3',
    description:
      'These usually are sophisticated analytical tools that allow you tolikeds dissect',
    icon: <FlareRoundedIcon fontSize='inherit' />,
  },
];

const About = () => {
  const classes = useStyles();

  const Card = ({ title, icon, description, ...rest }) => (
    <div className={classes.cardContainer} {...rest}>
      <div className={classes.cardIconContainer}>{icon}</div>
      <Typography className={classes.cardTitle}>{title}</Typography>
      <Typography className={classes.cardDescription}>{description}</Typography>
    </div>
  );

  return (
    <section id='about' className={classes.root}>
      <Container maxWidth='md' className={classes.contentContainer}>
        <Typography component='div' variant='h2' className={classes.header}>
          ABOUT
        </Typography>
        <div
          className={classes.headerBar}
          data-aos='fade-right'
          data-aos-delay='500'
        />
        <Grid container justify='center' alignItems='center' spacing={4}>
          <Grid item xs={12} data-aos='zoom-in-right' data-aos-delay='200'>
            <Typography className={classes.subHeading} variant='h2'>
              OUR MISSION
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            data-aos='zoom-in-left'
            data-aos-delay='200'
            className={classes.mainContent}
          >
            <Typography align='left'>
              <strong>Istanbul Auto Service</strong>, our mission is very clear
              and simple: to create great trust and respect for customers in
              need of auto service and repair. Istanbul Auto Service is serving
              our customers that you really can feel comfortable and confident
              about your car repair. If you’re having problems with your
              vehicle, we invite you to call our friendly team today.{' '}
              <strong>
                We aim to earn your trust and have a long term relationship with
                you and your vehicles.
              </strong>
            </Typography>
            <br />
            <Typography>
              From simple tune-ups to intensive diagnostics, repairs, and
              replacements, our team is ready to offer reliable, cost-effective,
              honest service, with customer awareness and transparency as our
              top priorities. Gone are the days of wondering if your mechanic is
              misleading you. At Istanbul Auto Service, you can count on
              straightforward auto repair as timely and safely.
            </Typography>
            {/*  <div className={classes.listItem}>
              <CheckRoundedIcon />
              <Typography> sdsd</Typography>
            </div>
            <div className={classes.listItem}>
              <CheckRoundedIcon />
              <Typography> sdsd</Typography>
            </div>
            <div className={classes.listItem}>
              <CheckRoundedIcon />
              <Typography> sdsd</Typography>
            </div>
            <div className={classes.listItem}>
              <CheckRoundedIcon />
              <Typography> sdsd</Typography>
            </div>
            <div className={classes.listItem}>
              <CheckRoundedIcon />
              <Typography> sdsd</Typography>
            </div> */}
          </Grid>
          {principles.map((principle, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                title={principle.title}
                description={principle.description}
                icon={principle.icon}
                data-aos='zoom-in-up'
                data-aos-delay={300 * index}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default About;
