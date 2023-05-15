import React from 'react';
//import PropTypes from 'prop-types';
import { Task } from '../../models/taks.class';
import { LEVELS } from '../../models/leves.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    
    const defaultTask = new Task('Example','Deafult Description', false, LEVELS.NORMAL);
    const changeState = (id) => {
        console.log('TODO: cambiar estado de una tarea');
    }


    return (
        <div>
            <div>
                <h1>Your task:</h1>
            </div>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

/*
TaskListComponent.propTypes = {

};
*/

export default TaskListComponent;
