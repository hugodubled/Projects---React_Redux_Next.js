import { useHistory } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { useWindowsSize } from './useWindowsSize';
import { useEffect } from 'react';

const DemoHooksPerso = (props) => {
   const [largeur,hauteur] = useWindowsSize();
   

    return (
        <div>
            La largeur est {largeur}px et la hauteur est {hauteur} px;

        </div>
    );
};

export default DemoHooksPerso;