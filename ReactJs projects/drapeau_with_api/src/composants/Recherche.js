import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardContent, CardHeader, Container, Image, Input, Label } from "semantic-ui-react";

const Recherche = (props) => {
    const [nom, setNom] = useState("");
    const [pays, setPays] = useState([]);


    const appelApi = () => {
        fetch(`https://restcountries.com/v2/name/${nom}?fields=name,alpha3Code,flags`)
            .then((response) => response.json())
            .then((data) => setPays(data))
            .catch((erreur) => console.log(erreur));
    }

    const renderPays = () => {
        return pays.map((i) => {
            return (
                <Card key={i.alpha3Code}>
                    <Image src={i.flags.svg} />
                    <CardContent>
                        <CardHeader>
                            <Link to={`/pays/${i.alpha3Code}`}> {i.name} </Link>
                        </CardHeader>
                    </CardContent>
                </Card>
            )
        })
    }

    //console.log(pays);
    console.log(props);
    return (
        <Container>
            <h1>Rechercher</h1>
            <Label pointing="right">Pays</Label>
            <Input type="text" value={nom} onChange={(e) => setNom(e.target.value)}></Input>
            <Button onClick={appelApi}> Rechercher les pays </Button>
            <h2>Résultats de recherche</h2>
            {pays.length > 0 ? `Il y a ${pays.length} résultat(s)` : undefined}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", width: "100%" }}>
                {pays.length > 0 ? renderPays() : undefined}
            </div>
        </Container>
    )
};

export default Recherche;