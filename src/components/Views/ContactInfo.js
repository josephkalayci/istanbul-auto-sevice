import React from 'react';
import { Grid, Hidden, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { companyInfo } from '../../constants/companyInfo';
import CheckIcon from '@material-ui/icons/Check';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    borderRadius: 2,
    color: '#000',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      background:
        'linear-gradient(rgba(250, 250, 250, 0.9), rgba(250, 250, 250, 0.9))',
    },
  },
  gridItem: {
    padding: 16,
    boxShadow: '0 0px 2px 0 rgba(0, 0, 0, 0.13)',
  },
  gridItemMiddle: {},
  workingDays: {
    display: 'flex',
    flexDirection: 'row',
    '& p': {
      marginBottom: 8,
    },
  },
  hoursContainer: {
    marginLeft: 16,
  },
  heading: {
    fontWeight: 600,
    paddingBottom: 8,
    marginBottom: 18,
    textTransform: 'uppercase',
    display: 'inline-block',
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
  text: { fontWeight: 500, fontSize: 12, marginBottom: 8 },
  muted: { fontWeight: 500, fontSize: 12, color: '#5E5E5E' },
  highlight: {
    color: theme.palette.secondary.main,
    fontWeight: 'bolder',
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    '& svg': {
      color: theme.palette.secondary.main,
      marginRight: 4,
    },
  },
}));

const ContactInfo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction='row' className={classes.gridContainer}>
        <Grid
          item
          xs={12}
          sm={4}
          md={6}
          className={classes.gridItem}
          data-aos='fade-left'
          data-aos-delay='300'
        >
          <Typography className={classes.heading}>Our Advantages</Typography>
          <div className={classes.iconContainer}>
            <CheckIcon color='primary' />
            <Typography className={classes.text}>
              {'Free Diagnostics & Brake Check'}
            </Typography>
          </div>
          <div className={classes.iconContainer}>
            <CheckIcon color='primary' />
            <Typography className={classes.text}>
              {'Certified repair services'}
            </Typography>
          </div>
          <div className={classes.iconContainer}>
            <CheckIcon color='primary' />
            <Typography className={classes.text}>
              {'Fair price repair estimates'}
            </Typography>
          </div>
        </Grid>
        <Hidden xsDown>
          <Grid
            item
            sm={4}
            md={6}
            className={clsx(classes.gridItem, classes.gridItemMiddle)}
            data-aos='fade-left'
            data-aos-delay='600'
          >
            <Typography className={classes.heading}>OPENING HOURS</Typography>
            <div className={classes.workingDays}>
              <div>
                <Typography className={classes.text}>Weekdays</Typography>
                <Typography className={classes.text}>Saturday</Typography>
                <Typography className={classes.text}>Sunday</Typography>
              </div>
              <div className={classes.hoursContainer}>
                <Typography className={classes.muted} noWrap>
                  05:00 – 22:00
                </Typography>
                <Typography className={classes.muted} noWrap>
                  10:00 – 03:00
                </Typography>
                <Typography className={classes.muted} noWrap>
                  10:00 – 06:00
                </Typography>
              </div>
            </div>
          </Grid>

          <Hidden mdUp>
            <Grid
              item
              xs={6}
              sm={4}
              className={classes.gridItem}
              data-aos='fade-left'
              data-aos-delay='900'
            >
              <Typography className={classes.heading}>GET IN TOUCH</Typography>
              <Typography className={classes.text}>
                Call Us for Free Estimation
              </Typography>
              <Typography
                className={classes.highlight}
                component='a'
                href={`tel:${companyInfo.phoneFormated}`}
              >
                {companyInfo.phone}
              </Typography>
            </Grid>
          </Hidden>
        </Hidden>
      </Grid>
    </div>
  );
};

export default ContactInfo;
