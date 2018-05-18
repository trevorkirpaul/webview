import React, { Component } from 'react';
import { connect } from 'react-redux';
import TitlePanel from '../../reusable/TitlePanel';
import {
  Card,
  CardActions,
  CardHeader,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';
import CircularProgress from 'material-ui/CircularProgress';

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

class InsuranceSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      insurancePackage: null,
    };
  }
  render() {
    const { store } = this.props;

    return (
      <div>
        <TitlePanel title="Insurance Selector" />
        <Wrapper>
          {store.insurancePackage.packages ? (
            store.insurancePackage.packages.map(pack => (
              <InsurancePanel
                key={pack.id}
                name={pack.name}
                description={`Price: ${pack.price}`}
              />
            ))
          ) : (
            <CircularProgress />
          )}
        </Wrapper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  store: {
    insurancePackage: state.insurancePackage,
    app: state.app,
  },
});

export default connect(mapStateToProps)(InsuranceSelector);
