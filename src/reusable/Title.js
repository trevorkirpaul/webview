import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

export default ({ title, subtitle, body }) => {
  return (
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-3">{title}</h1>
        {subtitle && <h3 className="lead">{subtitle}</h3>}
        {body && <p className="lead">{body}</p>}
      </Container>
    </Jumbotron>
  );
};
