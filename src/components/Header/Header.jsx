import React, { useState } from 'react';
import logo from '../../assets/Logo.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import './Header.css';

const Header = ({ onAddTask }) => {
    // const onAddTask = props;
    const [title, setTitle] = useState('');
    // const onAddTask = props.onAddTask;
    // console.log(props);

    function handleSubmit(event) {
        event.preventDefault();

        onAddTask(title);
    }

    function onChangeTitle(event) {
        setTitle(event.target.value);
    }

    return (
        <header className='header'>
            <img src={logo} alt="" />

            <form onSubmit={handleSubmit} className='newTaskForm'>
                <input placeholder='Add a new task' type="text" onChange={onChangeTitle} value={title}/>
                <button>
                    Create
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    );
};

export default Header;