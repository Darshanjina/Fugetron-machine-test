import React, { Component } from 'react'
import Navbar from '../common/Navbar';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class TaskList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             records:[],
             selected:{},
        }
    }

    componentDidMount(){
        this.funGetTasks();
    }

    funGetTasks=() =>{
        axios.get('https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch')
        .then((res)=>{
            console.log(res.data.data);
            this.setState({records:res.data.data})
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    funDelete=()=>{
        axios.get("https://k6j938wg66.execute-api.us-east-1.amazonaws.com/v1/delete",{params:{
            param1:this.state.selected.email
          }})
          .then((res)=>{
              this.funGetTasks();
          })
    }
    
    render() {
        return (
            <div>
                <Navbar/>
                <div>
                    <table className="table table-striped text-center table-sm">
                        <thead className="bg-primary">
                            <tr className="text-light">
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>State</th>
                                <th>City</th>
                                <th>Pincode</th>
                                <th colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        this.state.records.map((task,i)=>(
                            <tr key={i}>
                            <td>{i+1}</td>
                            <td>{task.first_name}</td>
                            <td>{task.last_name}</td>
                            <td>{task.email}</td>
                            <td>{task.states}</td>
                            <td>{task.city}</td>
                            <td>{task.pincode}</td>
                            <td><Link to={`/edit/${task.email}/${task.first_name}/${task.last_name}/${task.states}/${task.pincode}/${task.city}`} className="btn btn-primary btn-sm rounded-pill">Edit</Link></td>
                            <td><button className="btn btn-danger btn-sm rounded-pill" onClick={()=>{this.setState({selected:task})}} data-toggle="modal" data-target="#exampleModal">Delete</button></td>
                            </tr>
                        ))
                    }
                    </tbody>
                    </table>
                    
                </div>

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body text-center">
          <h4 className="my-3 text-primary">Are you sure to delete {this.state.selected.first_name}{this.state.selected.last_name}</h4>
        <button className="btn btn-danger btn-sm rounded-pill mr-2" onClick={this.funDelete}>Delete</button>
        <button className="btn btn-secondary btn-sm rounded-pill" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

            </div>
        )
    }
}
