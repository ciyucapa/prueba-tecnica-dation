import { FormCreateTaskProps } from '../../interfaces'
import {CreateContainer} from '../../styles'

const FormCreateTask = ({ task, handleSubmit, changeTask }: FormCreateTaskProps) => (
    <CreateContainer>
        <h2>{task?.id ? 'Editar Tarea' : 'Crear Tarea'}</h2>
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
            <button>{task?.id ? 'Editar' : 'Crear'}</button>
        </form>
    </CreateContainer>
);

export default FormCreateTask;