import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import { goToHomePage } from "../../routes/coordinator";

const PokedexPage = () => {
    const history = useHistory()

    return (
        <>
            <Header
                title={'Lista de Pokemon'}
                Button1={
                    <Button
                        variant={"outlined"}
                        color={"secondary"}
                        onClick={() => goToHomePage(history)}
                    >Voltar para Lista de Pokedex
                    </Button>
                }
            />

        </>
    )
}

export default PokedexPage