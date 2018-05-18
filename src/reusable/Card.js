import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import styled from 'styled-components';

const CardWrapper = styled.div`
  margin: 10px;
`;

const CardComponent = ({
  name = 'test',
  description = 'test',
  img = null,
  handleSelect,
  id,
}) => {
  return (
    <CardWrapper>
      <Card>
        <CardHeader title={name} subtitle={description} avatar={img} />

        <CardActions>
          <FlatButton label="Select" onClick={() => handleSelect(id)} />
        </CardActions>
      </Card>
    </CardWrapper>
  );
};

export default CardComponent;
