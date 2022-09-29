import {createContext, useReducer} from "react";
import {appReducer} from "./appReducer";
import {v4} from 'uuid'

const initialValue = {
    tasks: [
        {id: "0", title: "Tarea 1", description: "Descripcion tarea 1", responsable: "Cindy Caceres", done: false}
    ]
};

export interface ContextProviderProps {
    addTask?: any
    deleteTask?: any
    updateTask?: any
    state?: any
    tasks?: any
    changeDone?: any
}

export const Context = createContext<ContextProviderProps>({});

export const ContextProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(appReducer, initialValue);

    const addTask = (task: any) => {
        dispatch({type: 'ADD_TASK', payload:{...task, id: v4()} })
    };

    const deleteTask = (id: string) => {
        dispatch({type: 'DELETE_TASK', payload: id})
    };

    const updateTask = (task: any) => {
        dispatch({type: 'UPDATE_TASK', payload: task})
    }

    const changeDone = (task: any) => {
        dispatch({type: 'CHANGE_DONE', payload: task})
    }

    return (
        <Context.Provider value={{...state, addTask, deleteTask, updateTask, changeDone}}>
            {children}
        </Context.Provider>
    )
};