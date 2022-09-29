import {useContext} from 'react'
import { Context } from '../../context/Context';
import ListTask from '../../components/ListTask'
import useCreateEditTask from '../../hooks/useCreateEditTask';

const ContainerListTask = () => {
    const {tasks} = useContext(Context);
    const {deleteTasks, changeDones} = useCreateEditTask()
    return <ListTask tasks={tasks} deleteTasks={deleteTasks} changeDones={changeDones} />
};

export default ContainerListTask;