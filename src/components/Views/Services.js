import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ServiceCard from '../ServiceCard';
import Icon from '../Icons/Icon';
import mechanicsImage from '../../assets/images/services.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#616161',
    padding: '70px 0 140px 0',
    backgroundColor: '#fff',
    textAlign: 'center',
  },

  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontWeight: 300,
    color: '#444649',
  },
  headerBar: {
    fontWeight: 700,
    backgroundColor: '#444649',
    height: 2,
    width: 70,
    margin: '25px 0 25px 0',
  },
  subHeading: { marginBottom: 75 },
  image: {
    backgroundImage: `url(${mechanicsImage})`,
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.secondary.main,
    fontSize: 44,
    height: 92,
    width: 92,
    border: '1px solid',
    borderRadius: '50%',
    borderColor: theme.palette.secondary.main,

    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      boxShadow: '0 0 0 8px #c5d5e6',
    },
    '&:hover svg': {
      color: '#fff',
    },
  },
}));

const services = [
  { title: 'air filtration', icon: <Icon iconName='airFilter' /> },
  { title: 'breaks', icon: <Icon iconName='break' /> },
  { title: 'oil change', icon: <Icon iconName='oil' /> },
  { title: 'tires', icon: <Icon iconName='tire' /> },
  { title: 'maintenance', icon: <Icon iconName='engineCheck' /> },
  { title: 'batteries', icon: <Icon iconName='battery' /> },
  { title: 'safety', icon: <Icon iconName='safety' /> },
  { title: 'powertrain', icon: <Icon iconName='powerTrain' /> },
  { title: 'air condition', icon: <Icon iconName='airCondition' /> },
];

const Services = () => {
  const classes = useStyles();

  return (
    <section id='services' className={classes.root}>
      <Container maxWidth='md' className={classes.contentContainer}>
        <Typography component='div' variant='h2' className={classes.header}>
          VEHICLE REPAIR SERVICES
        </Typography>
        <div
          className={classes.headerBar}
          data-aos='fade-in'
          data-aos-delay='300'
        />

        <Typography
          className={classes.subHeading}
          data-aos='zoom-in'
          data-aos-anchor='#service'
        >
          We are one of the leading auto repair shops serving customers around
          the area. All repair services are performed by highly qualified
          mechanics.
        </Typography>
        <Grid container spacing={2}>
          <Grid item container xs={12} sm={7} md={6}>
            {services.map((service, id) => (
              <Grid item xs={4} sm={4} key={id}>
                <ServiceCard
                  title={service.title}
                  icon={
                    <div className={classes.iconContainer}>{service.icon}</div>
                  }
                  data-aos='zoom-in'
                  data-aos-delay={id * 200 + 300}
                />
              </Grid>
            ))}
          </Grid>
          <Grid item sm={5} md={6} data-aos='zoom-in-left'>
            <div className={classes.image} />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Services;
