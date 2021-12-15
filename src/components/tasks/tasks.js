import React from 'react';
import './tasks.css';


class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      tasks: []
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            tasks: result.slice(0,3),
            taskCount: 3
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  addTask = () => {
  	 let inputTask = prompt('Please enter your Task');
  	 if(inputTask){
	  	 let inputId = this.state.taskCount;
	  	 inputId++;
	  	 let newtask ={
	  	 	id: inputId,
	  	 	title: inputTask,
	  	 	completed: false
	  	 }
	  	 localStorage.setItem(inputId, newtask);
	  	 let { tasks } = this.state;
	  	 tasks.push(newtask);
	  	 this.setState({tasks: tasks});
	  	 this.setState({taskCount: inputId});
  	}
  }

  deleteTask = (id) => {
  	let { tasks } = this.state;
  	tasks.splice(id, 1);
  	this.setState({tasks: tasks, taskCount: this.state.taskCount--});
  	localStorage.removeItem(id);
  }

  render() {
    const { error, isLoaded, tasks } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
      	<div className="mv5 w-80 pa3 pv5 bg-white-90 center">
        <table className="center">
	        <thead>
	        	<tr>
		        	<th>Id</th>
		        	<th>Task</th>
		        	<th>Status</th>
		        	<th></th>
	        	</tr>
        	</thead>
        	<tbody>
        	{tasks.map(task =>(       		
          		<tr>
          		{ localStorage.setItem( 'task.id', JSON.stringify(task))}
          			<td>{task.id}</td>
          			<td>{task.title}</td>
          			<td>{task.completed.toString()}</td>
          			<td><button id="deleteTask">Delete</button></td>
          		</tr>
		        ))
	        }
	        </tbody>
        </table>

        <button id="addTask" onClick={ this.addTask }> Add </button>
        </div>
      );
    }
  }
}

export default Tasks;