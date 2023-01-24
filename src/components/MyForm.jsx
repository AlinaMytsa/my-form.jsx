import React from "react";
import MyTable from "./MyTable";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      passwordValue: '',
      addressValue: '',
      cityValue: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      emailValue: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  // renderTable = () => {
  //   return (
  //     <div>
  //       <button type="button" className="btn btn-primary">Back</button>
  //       <table className="table">
  //         <tbody>
  //         <tr>
  //           <td>acceptRules</td>
  //           <td>true</td>
  //         </tr>
  //         <tr>
  //           <td>address</td>
  //           <td>lenina street</td>
  //         </tr>
  //         <tr>
  //           <td>city</td>
  //           <td>moscow</td>
  //         </tr>
  //         <tr>
  //           <td>country</td>
  //           <td>russia</td>
  //         </tr>
  //         <tr>
  //           <td>email</td>
  //           <td>my@email.com</td>
  //         </tr>
  //         <tr>
  //           <td>password</td>
  //           <td>qwerty</td>
  //         </tr>
  //         </tbody>
  //       </table>
  //     </div>
  //   )
  // }

  render() {
    return (
      <form onChange={this.handleChange} name="myForm">
        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="col-form-label">Email</label>
          <input type="email" name="email" className="form-control" id="email" placeholder="Email"/>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="password" className="col-form-label">Password</label>
          <input type="password" name="password" className="form-control" id="password" placeholder="Password"/>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="address" className="col-form-label">Address</label>
          <textarea type="text" className="form-control" name="address" id="address"
                    placeholder="1234 Main St"></textarea>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="city" className="col-form-label">City</label>
          <input type="text" className="form-control" name="city" id="city"/>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="country" className="col-form-label">Country</label>
          <select id="country" name="country" className="form-control">
            <option>Choose</option>
            <option value="argentina">Argentina</option>
            <option value="russia">Russia</option>
            <option value="china">China</option>
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input id="rules" type="checkbox" name="acceptRules" className="form-check-input"/>
              Accept Rules
            </label>
          </div>
        </div>
        <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Sign in</button>
      </form>
    )
  }
}
MyForm.MyTable = MyTable;

export default MyForm;
