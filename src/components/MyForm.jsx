import React from "react";
import MyTable from "./MyTable";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        address: '',
        city: '',
        country: '',
        acceptRules: false,
        hidden: true,
    }
  }

  handleChange = (event) => {
    event.preventDefault()
   const target = event.target;
    const name = target.name;
    let value = '';

    if (target.type === 'checkbox'){
      value = target.checked;
    } else {
      value = target.value;
    }

    this.setState({
      [name]: value
    })
    }


  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      valueFromInputs: Object.entries(this.state),
      hidden: false
    })
  }

  handleTableHide = (event) =>{
    event.preventDefault();
    this.setState({
      valueFromInputs : undefined,
      hidden: true,
    })
  }

  render() {
    const valueFromInputs = this.state.valueFromInputs
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} name="myForm">
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="col-form-label">Email</label>
            <input onChange={this.handleChange}
                   value={this.state.email}
                   type="email" name="email" className="form-control" id="email"
                   placeholder="Email"/>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="password" className="col-form-label">Password</label>
            <input onChange={this.handleChange}
                   value={this.state.password}
                   type="password" name="password" className="form-control" id="password" placeholder="Password"/>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="address" className="col-form-label">Address</label>
            <textarea onChange={this.handleChange}
                      value={this.state.address}
                      className="form-control" name="address" id="address"
                      placeholder="1234 Main St"></textarea>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="city" className="col-form-label">City</label>
            <input onChange={this.handleChange}
                   value={this.state.city}
                   type="text" className="form-control" name="city" id="city"/>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="country" className="col-form-label">Country</label>
            <select
              onChange={this.handleChange}
              value={this.state.country}
              id="country" name="country" className="form-control">
              <option>Choose</option>
              <option value="argentina">Argentina</option>
              <option value="ukraine">Ukraine</option>
              <option value="china">China</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <div className="form-check">
              <label className="form-check-label" htmlFor="rules">
                <input onChange={this.handleChange}
                       checked={this.state.acceptRules}
                       id="rules" type="checkbox" name="acceptRules" className="form-check-input"/>
                Accept Rules
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>


          <MyTable valueFromInputs={valueFromInputs} onTableHide={this.handleTableHide}/>

        </form>
      </React.Fragment>
    )
  }
}

export default MyForm;
