import {Outlet} from 'react-router-dom'
import Nav from '../navbar/Nav';
const Root = () => {
    return (
        <div className='mx-10 mt-5'>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;