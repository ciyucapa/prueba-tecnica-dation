import { Link } from 'react-router-dom';
import {ListTaskProps} from '../../interfaces'
import {ListarContainer} from '../../styles'

const ListTask = ({ tasks, deleteTasks, changeDones }: ListTaskProps) => {
    console.log("task COMPO", tasks)
    return (
        <ListarContainer>
            {tasks?.map((tas: any) => (
                <section key={tas.id}>
                    <div>
                        <table>
                            <tr>
                                <td>Identificacion</td>
                                <td>Tarea por hacer</td>
                                <td>Descripcion</td>
                                <td>Responsable</td>
                                <td>Estatus</td>
                            </tr>
                            <tr>
                                <td>{tas.id}</td>
                                <td>{tas.title}</td>
                                <td>{tas.description}</td>
                                <td>{tas.responsable}</td>
                                <td>{tas.done === false ? 'Pendiente' : 'Cumplida'}</td>
                            </tr>
                        </table>
                    </div>
                    <Link to={`/edit${tas.id}`}><button>Edit</button></Link>
                    <button onClick={() => deleteTasks(tas.id)}>Delete</button>
                    <button onClick={() => changeDones(tas.id)}>Cambiar Estatus</button>
                </section>
            ))
            }
        </ListarContainer>
    );
    
}
export default ListTask;