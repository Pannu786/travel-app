import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

export const Map = ({ coordinates, setCoordinates, setBounds }) => {
  const classes = useStyles();
  const isMoblie = useMediaQuery('(max-width:600px)');

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyA8xiilcQ8Ns43C3S7Ecx3x22BcuxjAJBo' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          console.log(e);
        }}
        onChildClick={''}
      ></GoogleMapReact>
    </div>
  );
};
