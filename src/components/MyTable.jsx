import React from "react";
import MyForm from "./MyForm";

function MyTable (props) {
  return(
    <div>
      <button type="button" className="btn btn-primary">Back</button>
      <table className="table">
        <tbody>
        <tr>
          <td>acceptRules</td>
          <td>true</td>
        </tr>
        <tr>
          <td>address</td>
          <td><MyForm value={props.state.addressValue}/></td>
        </tr>
        <tr>
          <td>city</td>
          <td>moscow</td>
        </tr>
        <tr>
          <td>country</td>
          <td>russia</td>
        </tr>
        <tr>
          <td>email</td>
          <td>my@email.com</td>
        </tr>
        <tr>
          <td>password</td>
          <td>qwerty</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

MyTable.MyForm = MyForm;

export default MyForm;
