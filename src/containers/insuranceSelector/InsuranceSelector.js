import React, { Component } from 'react';
import TitlePanel from '../../reusable/TitlePanel';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';
import INSURANCE_DATA from '../../API/insurancePackages.json';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const CardWrapper = styled.div`
  margin: 10px;
`;

export default class InsuranceSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      insurancePackage: null,
    };
  }
  render() {
    return (
      <div>
        <TitlePanel title="Insurance Selector" />
        <Wrapper>
          <InsurancePanel />
          <InsurancePanel />
          <InsurancePanel />
        </Wrapper>
      </div>
    );
  }
}

const InsurancePanel = ({
  name = 'test',
  description = 'test',
  img = null,
}) => {
  return (
    <CardWrapper>
      <Card>
        <CardHeader title={name} subtitle={description} avatar={img} />

        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate
          interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label="Select" />
        </CardActions>
      </Card>
    </CardWrapper>
  );
};
