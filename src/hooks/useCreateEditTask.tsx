/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import {useState, useContext, useEffect, useCallback} from 'react';
import {Context} from '../context/Context';
import {useNavigate, useParams} from 'react-router-dom';
import {TaskProps} from '../interfaces';
import {getTasks, deleteTasksService, createTasksService, updateTasksService} from '../services'

const useCreateEditTask = () => {
    const navigate = useNavigate();
    const params = useParams();
    const {addTask, deleteTask, tasks, updateTask, changeDone, createTask} = useContext(Context);
    const [task, setTask] = useState({
        id: '',
        title: '',
        description: '',
        responsable: '',
        done: false
    })

    useEffect(() => {
        const tareaencontrada = tasks?.find((index : TaskProps) => index.id == params.id);
        console.log("tasks EFECT", tasks)
        console.log("paramID EFECT", params.id)
        if(tareaencontrada){
            setTask(tareaencontrada)
        }

        console.log("tareaencontrada EFECT", tareaencontrada)
    }, [params, tasks]);
    
    const changeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask({...task, [e.target.name]: e.target.value});
    };

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(task.id) {
            console.log("update")
            console.log("task udate", task)
            await updateTasksService(task, task.id)
            updateTask(task)
        } else {
            console.log("crrear")
            console.log("task crea", task)
            try {
                await createTasksService(task)
                addTask(task);
            } catch (error) {
                
            }
        }
        navigate('/list')
    };

    const deleteTasks = async (id: string) => {
        try {
            const response = await deleteTasksService(id)
            deleteTask(id);
            console.log("da", response)
        } catch (error) {
            
        }
    };

    const changeDones = async(id: string) => {
        try {
            changeDone(id) 
            const tareaencontrada = tasks?.find((index : TaskProps) => index.id == id);
            tareaencontrada.done = !tareaencontrada.done
            await updateTasksService(tareaencontrada, id)
            global.window.location.reload()
        } catch (error) {
            
        }
    };

    const isDisabled = () => {
        return task
    };

    const downloadTasks =  useCallback( async () => {
        if(tasks === null){
            try {
                const newTask = await getTasks()
                createTask(newTask)
            } catch (error) {
                console.log("e", error)
            }
        }
    }, [tasks, createTask])

    return {
        deleteTasks,
        task,
        isDisabled,
        changeTask,
        handleSubmit,
        changeDones,
        downloadTasks
    };
};

export default useCreateEditTask;