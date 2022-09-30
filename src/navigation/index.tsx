import {
    BrowserRouter as Router,
    Routes ,
    Route,
  } from "react-router-dom";
import Header from "../components/Header";

import {ContextProvider} from '../context/Context'
import CreateTask from '../scenes/createTask'
import ContainerListTask from '../scenes/listTask'

const Navigation = () => (
    <ContextProvider>
        <Router>
            <Header/>
            <Routes >
                <Route path='/list' element={<ContainerListTask/>}/>
                <Route path='/create' element={<CreateTask/>}/>
                <Route path='/edit/:id' element={<CreateTask/>}/>
            </Routes >
        </Router>
    </ContextProvider>
);

export default Navigation;