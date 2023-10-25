import React from 'react';
import './Task.css';
import {TbTrash} from 'react-icons/tb';

const Task = (props) => {
    const task = props;
    console.log(task);
    return (
        <div className='task'>
            <button className='checkContainer'>
                <div />
            </button>
            <p> {task.title} </p>
            <button className='deleteButton'>
                <TbTrash size={20} />
            </button>
        </div>
    );
};

export default Task;