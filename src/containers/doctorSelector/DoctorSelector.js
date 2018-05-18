import React, { Component } from 'react';
// import TitlePanel from '../../reusable/TitlePanel';
import Card from '../../reusable/Card';

export default class DoctorSelector extends Component {
  render() {
    const { handleSelect } = this.props;
    return (
      <div>
        {this.props.doctors &&
          this.props.doctors.map(doc => (
            <Card
              key={doc.id}
              name={doc.name}
              description={doc.specialization}
              handleSelect={handleSelect}
              id={doc.id}
            />
          ))}
      </div>
    );
  }
}
