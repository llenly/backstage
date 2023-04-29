import React from 'react';
//import { makeStyles } from '@material-ui/core';
import MyCustomIcon from './LogoNeo/neoris-icon-white.png';


// const useStyles = makeStyles({
//   svg: {
//     width: 'auto',
//     height: 28,
//   },
//   path: {
//     fill: '#7df3e1',
//   },
// });


const LogoIcon = () => {
  return <img width='auto' height="28" src={MyCustomIcon} />;
};

export default LogoIcon;
