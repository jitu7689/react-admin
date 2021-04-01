import React from "react";
import NumberFormat from 'react-number-format';

class IDMaskedInput extends React.Component {
  render() {
    const { inputRef, ...other } = this.props;
    return (
      <div>
        <NumberFormat
          {...other}
          format="+1 (###) ###-####"
          mask="_"
          value={this.props.value}
          onChange={event => this.props.onPhoneChange(event)}
        />
      </div>
    );
  }
}

export default IDMaskedInput;
