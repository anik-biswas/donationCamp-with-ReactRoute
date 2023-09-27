import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='h-screen justify-center items-center text-center'>
        <div className='text-xl font-bold p-40'>
            <h2 className='my-5'>OPPS! </h2>
            <p><span>{error.status}</span>{error.statusText || error.message}</p>
           <Link to="/"><button className='btn my-5'>Home</button></Link> 
        </div>
        </div>
    );
};

export default ErrorPage;