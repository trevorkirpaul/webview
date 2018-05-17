import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export default ({ label, onPress }) => {
  return <FlatButton label={label} onClick={onPress || (() => {})} />;
};
