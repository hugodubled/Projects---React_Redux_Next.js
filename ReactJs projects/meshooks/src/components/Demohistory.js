import { useHistory } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

const Demohistory = (props) => {
    const history = useHistory();
    console.log(history);
    console.log(props);

    return (
        <Container>
            <h1>Demo USE HISTORY</h1>
            <p>Bienvenue sur notre guide des pays, crée à partir de React, react-Router et l'APi restcountries.eu</p>
    </Container>
    );
};

export default Demohistory;