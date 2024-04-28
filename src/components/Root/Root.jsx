import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Fotter from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Root;