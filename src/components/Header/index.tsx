import { Link } from 'react-router-dom';
import {Navbar} from '../../styles'

const Header = () => (
    <Navbar>
        <Link to="/list">
            <div>Lista de tareas por hacer</div>
        </Link>
        <Link to="/create">
            <div>Agregar tarea nueva</div>
        </Link>
    </Navbar>
);

export default Header