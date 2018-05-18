import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { selectDoctor } from '../../redux/actions/doctor';
import DoctorSelector from '../doctorSelector/DoctorSelector';
import TitlePanel from '../../reusable/TitlePanel';
// import styled from 'styled-components';
// import COLORS from '../../utils/constants';
// import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: ${COLORS.black};
//   font-family: 'Roboto', sans-serif;
//   border: 1px solid #383838;
//   padding: 5px 10px;
//   &:hover {
//     color: ${COLORS.blue};
//     border-color: ${COLORS.blue};
//     cursor: pointer;
//   }
// `;

// const Panel = styled(Paper)`
//   padding: 15px;
//   margin-top: 10px;
//   background-color: ${COLORS.white};
// `;

class FindDoctors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  handleClose = () => this.setState({ visible: !this.state.visible });
  handleSelect = id => {
    this.props.actions.selectDoctor(id);
    this.setState(() => ({ visible: false }));
  };
  render() {
    const { doctors } = this.props.doctors;
    const actions = [<FlatButton label="cancel" onClick={this.handleClose} />];
    if (!doctors) {
      return <CircularProgress />;
    }
    return (
      <div>
        <TitlePanel
          title="Find A Doctor"
          subtitle="Good Health, Good Doctor"
          content={
            <FlatButton label="Begin Search" onClick={this.handleClose} />
          }
        />
        <Dialog
          title="Doctor Selector"
          actions={actions}
          modal={true}
          open={this.state.visible}
          autoScrollBodyContent={true}
        >
          <DoctorSelector doctors={doctors} handleSelect={this.handleSelect} />
        </Dialog>
      </div>
    );
  }
}

const mapState = state => ({
  doctors: state.doctors,
});

const mapDispatch = dispatch => ({
  actions: {
    selectDoctor: bindActionCreators(selectDoctor, dispatch),
  },
});

export default connect(mapState, mapDispatch)(FindDoctors);
