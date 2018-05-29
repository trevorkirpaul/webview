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
import Icon from '../../reusable/Icon';
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';
import CircularProgress from 'material-ui/CircularProgress';

// ? INSURANCE OPTIONS
const insOptions = [
  { name: 'Gold', price: 350, icon: 'chevron_right', key: '001' },
  { name: 'Silver', price: 350, icon: 'chevron_right', key: '002' },
  { name: 'Bronze', price: 350, icon: 'chevron_right', key: '003' },
];

// ? INSURANCE STYLES / FOR CARDS
const OptionsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 100px;
`;
const InsuranceOptionWrap = styled.div`
  background-color: #c5e1a5;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  color: #383838;
  font-weight: 5600;
  font-size: 16px;
  align-items: center;
`;
const InsuranceOptionInner = styled.div``;
const InsuranceOptionBoldText = styled.span`
  font-weight: 600;
`;
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

const MobileInsurancePanel = ({ name, price, icon }) => (
  <InsuranceOptionWrap>
    <InsuranceOptionInner>
      <p>
        name: <InsuranceOptionBoldText>{name}</InsuranceOptionBoldText>
      </p>
      <p>
        price: <InsuranceOptionBoldText>${price}</InsuranceOptionBoldText>
      </p>
    </InsuranceOptionInner>
    <Icon color="#383838" icon={icon} size={40} />
  </InsuranceOptionWrap>
);

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
    //  ! FROM WRAPPER
    if (!store.app.fromWrapper) {
      return (
        <OptionsWrap>
          {insOptions.map(opt => (
            <MobileInsurancePanel
              key={opt.key}
              name={opt.name}
              price={opt.price}
              icon={opt.icon}
            />
          ))}
        </OptionsWrap>
      );
    }
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
