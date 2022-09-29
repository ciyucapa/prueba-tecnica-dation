import { Link } from 'react-router-dom';
import {Navbar} from '../../styles'

const Header = () => (
    <Navbar>
        <Link to="/list">
            <p>Lista de tareas por hacer</p>
        </Link>
        <Link to="/create">
            <div>Agregar tarea nueva</div>
        </Link>
    </Navbar>
);

export default Header