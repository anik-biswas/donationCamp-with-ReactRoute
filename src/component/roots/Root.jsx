import {Outlet} from 'react-router-dom'
import Nav from '../navbar/Nav';
const Root = () => {
    return (
        <div className='px-10 pt-5 w-full'>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;