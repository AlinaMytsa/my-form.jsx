import React from "react";
import cn from 'classnames';

class MyTable extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    const {valueFromInputs, onTableHide} = this.props;
    let objValueFromInputs = {
      email: '',
      password: '',
      address: '',
      city: '',
      country: '',
      acceptRules: false,
      hidden: true
    }
    if (valueFromInputs !== undefined){
      objValueFromInputs = Object.fromEntries(valueFromInputs)
    }

    return(
      <div className={cn('form-table',
        {hidden : objValueFromInputs.hidden})}>
        <button onClick={onTableHide} type="button" className="btn btn-primary">Back</button>
        <table className="table">
          <tbody>
          <tr>
            <td>address:</td>
            <td>{objValueFromInputs.address}</td>
          </tr>
          <tr>
            <td>city:</td>
            <td>{objValueFromInputs.city}</td>
          </tr>
          <tr>
            <td>country: </td>
            <td>{objValueFromInputs.country}</td>
          </tr>
          <tr>
            <td>email:</td>
            <td>{objValueFromInputs.email}</td>
          </tr>
          <tr>
            <td>password:</td>
            <td>{objValueFromInputs.password}</td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


export default MyTable;
