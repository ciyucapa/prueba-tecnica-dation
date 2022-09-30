import {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { ListTaskProps, TaskProps } from '../../interfaces'
import { ListarContainer, Task } from '../../styles'

const ListTask = ({ tasks, deleteTasks, changeDones, downloadTasks }: ListTaskProps) => {
    
    useEffect(() => {
        downloadTasks()
    }, [])

    return (
        <ListarContainer>
            {tasks?.map((tas: TaskProps) => (
                <section key={tas.id}>
                    <div>
                        <Task>
                            <p>Identificacion</p>
                            <p>{tas.id}</p>
                        </Task>
                        <Task>
                            <p>Tarea por hacer</p>
                            <p>{tas.title}</p>
                        </Task>
                        <Task>
                            <p>Descripcion</p>
                            <p>{tas.description}</p>
                        </Task>
                        <Task>
                            <p>Responsable</p>
                            <p>{tas.responsable}</p>
                        </Task>
                        <Task>
                            <p>Estado</p>
                            <p>{tas.done === false ? 'Pendiente' : 'Cumplida'}</p>
                        </Task>
                    </div>
                    <Link to={`/edit/${tas.id}`}><button>Editar</button></Link>
                    <button onClick={() => deleteTasks(tas.id)}>Eliminar</button>
                    <button onClick={() => changeDones(tas.id)}>Cambiar Estado</button>
                </section>
            ))
            }
        </ListarContainer>
    );
    
}
export default ListTask;