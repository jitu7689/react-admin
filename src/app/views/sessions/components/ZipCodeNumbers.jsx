import React from "react";
import NumberFormat from 'react-number-format';

class ZipCodeNumbers extends React.Component {
  render() {
    const { inputRef, ...other } = this.props;
    return (
      <div>
        <NumberFormat
          {...other}
          thousandSeparator={false}
          value={this.props.value}
          onChange={event => {
            this.props.onChange(event)
          }}
        />
      </div>
    );
  }
}

export default ZipCodeNumbers;
