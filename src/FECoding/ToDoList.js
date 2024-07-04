import React from 'react'
import { useState } from 'react'

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

    }

    function deleteTask()
    {

    }

    function moveTaskUp()
    {

    }

    function moveTaskDown()
    {

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
