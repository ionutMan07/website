import React from 'react'
import { Button } from '@material-ui/core'
import TrashIcon from '@material-ui/icons/Delete'
// import StarIcon from '@material-ui/icons/StarOutlined'

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 50,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  rating: {
    marginTop: 20
  }
}));

const MovieItem = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const movie = props.movie
  const imgUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  return (
    
<Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {movie.title[0]}
          </Avatar>
        }
        title={movie.title}
        subheader={movie.release_date}
      />
      <div>
        <CardMedia
          className={classes.media}
          image={imgUrl}
          title={movie.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.overview}
          </Typography>
        </CardContent>
      </div>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <span>
        <Button>
          <TrashIcon />
        </Button>
      </span>
      <Rating
        className={classes.rating}
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <span>Rating: {movie.vote_average}</span>
    </Card>
  );
}

const SavedMovies = (props) => {

  
  return (
    <div>
      {props.savedMovies && props.savedMovies.length > 0 ? (
        <ul >
          {props.savedMovies.map((movie) => (
            <MovieItem movie={movie} />
          ))}
        </ul>
      ) : (
        'No saved movies'
      )}
    </div>
  )
}

export default SavedMovies
