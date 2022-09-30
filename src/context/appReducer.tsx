import {TaskProps} from '../interfaces'

export const appReducer = (state: any, action: any) => {

    switch (action.type) {
        case 'ADD_TASK':
            return {
                tasks: [...state.tasks, action.payload]
            };
        

        case 'DELETE_TASK':
         
            return {
                tasks: state.tasks.filter((index: TaskProps)=> index.id !== action.payload)
            };

        case 'UPDATE_TASK':
            const update = action.payload;

            const updateTask = state.tasks.map((task: TaskProps) => {
                if(task.id === update.id) {
                    task.title = update.title
                    task.description = update.description
                    task.responsable = update.responsable
                }
                return task
            });

        return {
            tasks: updateTask
        };

        case 'CHANGE_DONE': 
            const updateNew = action.payload;

        return {
            tasks: state.tasks.map((task: TaskProps) => 
            task.id === updateNew ? {...task, done: !task.done } : task
           )
        };

        case 'CREATE_TASK': 
        const newTasks = action.payload;

        return {
            tasks: newTasks
        };

        default:
            break;
    };
};