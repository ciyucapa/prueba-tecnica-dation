import {ReactNode} from "react";
export interface TaskProps {
    id?: string
    title?: string
    description?: string
    responsable?: string
    done?: boolean
}

export interface FormCreateTaskProps {
    task?: TaskProps
    changeTask?: any
    handleSubmitCreate?: any
    handleSubmitUpdate?: any
    handleSubmit?: any
}

export interface ListTaskProps {
    tasks?: TaskProps[]
    deleteTasks?: any
    changeDones?: any
    downloadTasks?: any
}

export interface ContextProps {
    addTask?: any
    deleteTask?: any
    updateTask?: any
    state?: any
    tasks?: any
    changeDone?: any
    createTask?: any
}

export interface ContextProviderProps {
    children?: ReactNode
}