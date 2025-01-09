//import {  useNavigate } from 'react-router-dom'
import PageContent from '../components/PageContent';


function HomePage(){
    /*const navigate = useNavigate();

    function navigateHandler(){
    navigate('/products');

    return <h1> My Home Page</h1>*/
    return (
        <PageContent>
            <p>Browse all our amazing events!</p>
        </PageContent>
    );
}

export default HomePage;