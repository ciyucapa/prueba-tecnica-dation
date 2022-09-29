import { FormCreateTaskProps } from '../../interfaces'

const FormCreateTask = ({ task, handleSubmit, changeTask }: FormCreateTaskProps) => (
    <div>
        <h2>{task?.id ? 'Edit Task' : 'Create Task'}</h2>
        <form onSubmit={handleSubmit} >
            <input
                name="title"
                type="text"
                onChange={changeTask}
                value={task?.title}
                placeholder="Titulo de la tarea...."
            />
            <input
                name="responsable"
                type="text"
                onChange={changeTask}
                value={task?.responsable}
                placeholder="Responsable de la tarea...."
            />
            <div>
                <textarea
                    name="description"
                    placeholder="Descripcion de la tarea"
                    onChange={changeTask}
                    value={task?.description}
                >
                </textarea>
            </div>
            <button>{task?.id ? 'Edit' : 'Create'}</button>
        </form>
    </div>
);

export default FormCreateTask;