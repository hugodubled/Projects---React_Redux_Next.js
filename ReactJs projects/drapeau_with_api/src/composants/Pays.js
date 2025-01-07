import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Label } from "semantic-ui-react";

const Pays = (props) => {
    const alphacode = props.match.params.abc;
    const [pays, setPays] = useState({});

    useEffect(() => {
        fetch(`https://restcountries.com/v2/alpha/${alphacode}`)
            .then((response) => response.json())
            .then((data) => setPays(data))
            .catch((e) => console.log(e));

    }, [alphacode]);

    console.log(pays);
    return (
        <Container>
            <h1>{pays.name}</h1>
            <img alt="drapeau" src={pays.flag} style={{ width: 130, border: "1px solid grey" }} />
            <p>Population : {pays.population} habitants</p>
            <p>Superfecie : {pays.area} m2</p>
            {/* <p> Latitude : {pays.latlng[0]} , Longitude :{pays.latlng[1]} </p> */}
            Coordonnées: {pays.latlng ?pays.latlng.map((i)=><div> {i}</div>):undefined }
            <div>
                {pays.borders ? pays.borders.map((frontiere) => <Label>
                    <Link to={`/pays/${frontiere}`}> {frontiere}</Link>
                </Label>) : undefined}

            </div>
        </Container>
    )
};

export default Pays;