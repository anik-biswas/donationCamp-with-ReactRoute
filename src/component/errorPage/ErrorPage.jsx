import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2>OPPS! Page Not Found</h2>
           <Link to="/">Home</Link> 
        </div>
    );
};

export default ErrorPage;