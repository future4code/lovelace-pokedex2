import React from 'react';
import {useHistory} from "react-router-dom";

//Styles
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Requests
import { useRequestData } from "../../Hooks/useRequestData";
import {goToPokemonDetails} from "../../routes/coordinator";

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
  const history = useHistory()
  const [pokemon]  = useRequestData({}, props.url)


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

        <Button
            variant="outlined"
            size="small"
            color="primary">
            Adicionar
        </Button>

        <Button
            onClick={() => goToPokemonDetails(history, pokemon)}
            variant="outlined"
            size="small"
            color="secondary">
            Detalhes
        </Button>
      </CardActions>
    </Card>}
    </>
  );
}
