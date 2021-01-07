import React from 'react';
import { makeStyles } from '@material-ui/core';

const iconList = {
  airFilter: "'\\E82D'",
  battery: "'\\E825'",
  engineCheck: "'\\E816'",
  oil: "'\\e826'",
  powerTrain: "'\\E830'",
  break: "'\\E80E'",
  tire: "'\\E81D'",
  airCondition: "'\\E82C'",
  safety: "'\\E807'",
};

const useStyles = makeStyles((theme) => ({
  icon: (props) => ({
    fontSize: 80,
    fontFamily: 'CarRepair',
    transition: 'all 0.5s',
    '&:before': {
      content: iconList[props.iconName],
    },
    '&:hover': {
      color: '#fff',
    },
  }),
}));

const Icon = (props) => {
  const classes = useStyles(props);
  return <span className={classes.icon} {...props} />;
};

export default Icon;
