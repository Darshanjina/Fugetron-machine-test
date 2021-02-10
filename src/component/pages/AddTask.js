import React, { Component } from 'react'
import axios from 'axios';
import Navbar from '../common/Navbar';
import {Link} from 'react-router-dom';

export default class AddTask extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       first_name:"",
       last_name:"",
       email:"",
       state:"",
       city:"",
       pincode:""
    }
  }

  funHandleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    console.log(this.state);
  }
  
  funHandleSubmit=(e)=>{
    axios.get("https://c0ri699qs5.execute-api.us-east-1.amazonaws.com/v1/add",{params:{
      param1:this.state.email,
      param2:this.state.first_name,
      param3:this.state.last_name,
      param4:this.state.pincode,
      param5:this.state.city,
      param6:this.state.state
    }})
    .then((res)=>{
      if(res.status === 200 ){
        this.props.history.push('/');
        console.log(res);
      }
    })
    .catch((err)=>{
      console.log(err)
    })

  }

  funValidation=()=>{
    if(this.state.pincode.length === 5 && this.state.email.length > 0){
        this.funHandleSubmit();
    }
    else{
        alert("Invalid Email or Pincode");
    }
  }

  render() {
    return (
      <div className="container-fluid px-0">
        <Navbar/>
      <div className="container">
        <div className="row py-3">
          <div className="col-3">
            <label className="text-primary">First Name</label>
            <input type="text" name="first_name" className="form-control" onChange={this.funHandleChange} value={this.state.first_name}/>
          </div>
          <div className="col-3">
          <label className="text-primary">Last Name</label>
            <input type="text" name="last_name" className="form-control" onChange={this.funHandleChange} value={this.state.last_name}/>
          </div>
          <div className="col-3">
            <label className="text-primary">Email</label>
            <input type="email" name="email" className="form-control" onChange={this.funHandleChange} value={this.state.email}/>
          </div>
          <div className="col-12 py-2"></div>
          <div className="col-3">
            <label className="text-primary">State</label>
            <select className="form-control" name="state" onChange={this.funHandleChange} value={this.state.state}>
              <option value="">Select a state</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Goa">Goa</option>
              <option value="Gujrat">Gujrat</option>
              <option value="Delhi">Delhi</option>
            </select>
          </div>
          <div className="col-3">
          <label className="text-primary">City</label>
            <input type="text" name="city" className="form-control" onChange={this.funHandleChange} value={this.state.city}/>
          </div>
          <div className="col-3">
            <label className="text-primary">Pincode</label>
            <input type="number" name="pincode" className="form-control" onChange={this.funHandleChange} value={this.state.pincode}/>
          </div>
          
        </div>

        <div className="text-center pt-5">
        <button className="btn btn-primary btn-sm rounded-pill mr-2 px-4" onClick={this.funValidation}>Add</button>
          <Link to="/" className="btn btn-secondary btn-sm rounded-pill px-4">Cancel</Link>
        </div>
      </div>
      </div>
    )
  }
}
