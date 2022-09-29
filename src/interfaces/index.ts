export interface TaskProps {
    id?: string
    title?: string
    description?: string
    responsable?: string
    done?: boolean
}

export interface FormCreateTaskProps {
    task?: TaskProps
    handleSubmit?: any
    changeTask?: any
}

export interface ListTaskProps {
    tasks?: TaskProps[]
    deleteTasks?: any
    changeDones?: any
}