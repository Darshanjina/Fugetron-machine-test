import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import TaskList from './component/pages/TaskList';
import AddTask from './component/pages/AddTask';
import EditTask from './component/pages/EditTask';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component={TaskList}/>
        <Route exact path = "/add" component={AddTask}/>
        <Route exact path = "/edit/:email/:first_name/:last_name/:state/:pincode/:city" component={EditTask}/>
      </Switch>
    </Router>
  )
}