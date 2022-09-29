import FormCreateTask from '../../components/CreateTask'
import useCreateEditTask from '../../hooks/useCreateEditTask';

const CreateTask = () => {
    const hooks = useCreateEditTask();
    return <FormCreateTask {...hooks}/>
};

export default CreateTask;