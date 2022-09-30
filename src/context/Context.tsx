import {createContext, useReducer} from "react";
import {appReducer} from "./appReducer";
import {v4} from 'uuid';
import {TaskProps, ContextProps, ContextProviderProps} from '../interfaces'

const initialValue = {
    tasks: null
};

export const Context = createContext<ContextProps>({});

export const ContextProvider = ({children}: ContextProviderProps) => {
    const [state, dispatch] = useReducer(appReducer, initialValue);

    const addTask = (task: TaskProps) => {
        dispatch({type: 'ADD_TASK', payload:{...task, id: v4()} })
    };

    const deleteTask = (id: string) => {
        dispatch({type: 'DELETE_TASK', payload: id})
    };

    const updateTask = (task: TaskProps) => {
        dispatch({type: 'UPDATE_TASK', payload: task})
    }

    const changeDone = (id: string) => {
        dispatch({type: 'CHANGE_DONE', payload: id})
    }

    const createTask= (taks: any) => {
        dispatch({type: 'CREATE_TASK', payload: taks})
    }

    return (
        <Context.Provider value={{...state, addTask, deleteTask, updateTask, changeDone, createTask}}>
            {children}
        </Context.Provider>
    )
};