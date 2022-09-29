import {useState, useContext, useEffect} from 'react';
import {Context} from '../context/Context';
import {useNavigate, useParams} from 'react-router-dom'

const useCreateEditTask = () => {
    const navigate = useNavigate();
    const params = useParams();
    const {addTask, deleteTask, tasks, updateTask, changeDone} = useContext(Context);
    const [task, setTask] = useState({
        id: '',
        title: '',
        description: '',
        done: false
    })

    useEffect(() => {
        const tareaencontrada = tasks?.find((index : any) => index.id === params.id);
        if(tareaencontrada){
            setTask(tareaencontrada)
        }
    }, [params, tasks]);
    
    const changeTask = (e: any) => {
        setTask({...task, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if(task.id) {
            updateTask(task)
        } else {
            addTask(task);
        }
        navigate('/list')
    };

    const deleteTasks = (id: string) => {
        deleteTask(id);
    };

    const changeDones = () => {
        changeDone() 
    };

    const isDisabled = () => {
        return task
    };

    return {
        deleteTasks,
        task,
        isDisabled,
        changeTask,
        handleSubmit,
        changeDones
    };
};

export default useCreateEditTask;