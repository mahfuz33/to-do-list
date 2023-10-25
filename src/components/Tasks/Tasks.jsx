import React from 'react';
import './Tasks.css';
import Task from '../Task/Task';

const Tasks = ({ tasks }) => {
    return (
        <div>
            <section className="tasks">
                <header className="header-section">
                    <div>
                        <p>Create tasks</p>
                        <span>10</span>
                    </div>
                    <div>
                        <p className='textPurple'>Completed</p>
                        <span>1 out of 10</span>
                    </div>
                </header>

                <div className="list">
                    {
                        tasks.map((task) => (
                            <Task
                                key={task.id}
                                task={task}
                            />
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default Tasks;
