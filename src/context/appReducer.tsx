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
                }
                return task
            });

        return {
            tasks: updateTask
        };

        case 'CHANGE_DONE': 
            const updateDone =  state.tasks.map((task: TaskProps) => {
                console.log("es false", task.done)
                if(task.done === false) {
                    task.done = true 
                    console.log("cambia a true", task.done)
                }
                return task
            })

        return {
            tasks: updateDone
        };

        default:
            break;
    };
};