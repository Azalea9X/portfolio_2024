import React from 'react';
import Task from "./components/Task";
import TaskList from "./components/TaskList";
import cors from "cors"; 

// Import Bootstrap CSS and JS
import { 
  Container, Button, InputGroup, FormControl
} from 'react-bootstrap'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import "./output-final.css"; 

const App = () => {
  {alert(window.innerWidth)}
  return (
    <div>
    <Container className="">
      <div className="app text-center ">
        <h1 className="app__title">ToDo App</h1>
        <Task />
        <TaskList />
        <p className="">The quick brown fox...</p>
      </div>
    </Container>
    </div>
  );
};

export default App;
