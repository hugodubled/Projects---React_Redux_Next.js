import { Fragment } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import { Menu, MenuItem } from 'semantic-ui-react';
import './App.css';
import Accueil from './composants/Accueil';
import Page404 from './composants/Page404';
import Pays from './composants/Pays';
import Recherche from './composants/Recherche';

function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <h1>Menu</h1>
                <Menu>
                    <MenuItem as={NavLink} activeStyle={{ color: "red", fontWeight: "bold" }} to="/" exact>Accueil</MenuItem>
                    <MenuItem as={NavLink} activeStyle={{ color: "red", fontWeight: "bold" }} to="/recherche">Rechercher</MenuItem>
                    <MenuItem as={NavLink} activeStyle={{ color: "red", fontWeight: "bold" }} to="/pays">Pays</MenuItem>
                </Menu>

                <Switch>
                    <Route path="/" component={Accueil} exact />
                    <Route path="/recherche" component={Recherche} />
                    <Route path="/pays/:abc" component={Pays} />
                    <Route path="*" component={Page404} />

                </Switch>
            </BrowserRouter>
        </Fragment>
    );
}
export default App;