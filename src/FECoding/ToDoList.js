import React from 'react'
import { useState } from 'react'
import '../todolist.css'

const ToDoList = () => {

    // array of tasks
    const [tasks, setTasks] = useState(["LeetCode DSA", "LeetCode JS", "FE Coding"]);

    // single task
    const [newTask, setNewTask] = useState("");

    // We use this function to see the text we type in input field
    // otherwise t won't be visible when we type it 
    function handleInputChange(event) {
        setNewTask(event.target.value)

    }

    function addTask()
    {
        // tp prevent adding task with empty strings
        if(newTask.trim() !== "")
            {
                setTasks(t => [...t, newTask]);
                // clear the input after adding new task
                setNewTask("");
            }
    }

    function deleteTask(index)
    {
        // create a new array which should filter out the task that you want to delete
        // if it matches with the index i
        const updatedTasks = tasks.filter((element, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index)
    {
        if(index > 0)
            {
                const updatedTasks = [...tasks];
                // destructure the array of tasks
                // swap the top and bottom elements in array
                [updatedTasks[index], updatedTasks[index -1]] = 
                [updatedTasks[index - 1], updatedTasks[index]];
                setTasks(updatedTasks);
            }

    }

    function moveTaskDown(index)
    {
        if(index < tasks.length - 1)
            {
                const updatedTasks = [...tasks];
                // destructure the array of tasks
                // swap the top and bottom elements in array
                [updatedTasks[index], updatedTasks[index + 1]] = 
                [updatedTasks[index + 1], updatedTasks[index]];
                setTasks(updatedTasks);
            }
    }

  return (
    <div className='to-do-list'>
        <h1>To Do List</h1>

        <input
        type="text"
        placeholder='Enter your task...'
        onChange={handleInputChange}
        value={newTask} />

        <button 
        className='add-task'
        onClick={addTask}> Add </button>
      
      <ol>
        {tasks.map((task, index) => 
        <li key={index}>
            <span className='text'>{task}</span>
            <button className='delete-button' onClick={() => deleteTask(index)}>
                Delete
            </button>

            <button className='up-button' onClick={() => moveTaskUp(index)}>
                ⬆️
            </button>

            <button className='down-button' onClick={() => moveTaskDown(index)}>
                ⬇️
            </button>

        </li>
        )}
      </ol>
    </div>
  )
}

export default ToDoList
