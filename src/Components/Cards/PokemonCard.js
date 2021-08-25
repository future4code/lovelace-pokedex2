import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useRequestData } from "../../Hooks/useRequestData";
import GlobalContext from '../../global/GlobalContext';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function PokemonCard(props) {
  const classes = useStyles();
  const [pokemon]  = useRequestData({}, props.url)
  const { states, setters, requets } = useContext(GlobalContext)
    // console.log('detalhe', pokemon.sprites.front_default)
    const print = () => {
      // console.log('detalhe', {name: pokemon.species.name, url: pokemon})
      // console.log('props', props)

      console.log('pokemon', useLocation)
      console.log('pokedex', states.listPokedex)

    }
    // console.log('pokemon', states.listPokemon)
    // console.log('pokedex', states.listPokedex)
  return (
    <>
    {pokemon.sprites &&
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={pokemon.sprites.front_default}
          title={props.name}
          style={{maxWidth: '150px', maxHeight:'100%', margin:'0 auto'}}
        />
        <CardContent style={{textAlign:'center'}}> 
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent: 'center'}}>
      {
        props.screen === 'HomePage' ?
          <Button size="small" color="primary" 
            onClick={() => setters.addPokemon(props.name, props.url)}
          >
            Adicionar
          </Button> :
          <Button size="small" color="primary" 
            onClick={() => setters.removePokemon(props.name, props.url)}
          >
            Remover
          </Button>
      }
        <Button size="small" color="primary" >
            Detalhes
        </Button>
      </CardActions>
    </Card>}
    </>
  );
}
