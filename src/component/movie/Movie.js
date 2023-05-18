import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from './modalmovie/ModalMovie'
import axios from 'axios';
import { useState } from 'react';
import './Movie.css';



function Movie(props) {
  const path = `https://image.tmdb.org/t/p/w500`;

  const [showFlag, setShowFlag] = useState(false);
  const [clickedMovie, setClickedMovie] = useState({});

  const [comments, setComments] = useState('');

  const handleShow = (item) => {
    setShowFlag(true);
    setClickedMovie(item);
  };

  const handleClose = () => {
    setShowFlag(false);
  };

  const addToFav = () => {
    const serverURL = `${process.env.REACT_APP_serverURL}/addmovie`;
    const movieData = {
      ...props.item,
      comments: comments
    };

    axios.post(serverURL, movieData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    setShowFlag(false);
  };

  return (
    <>
      <Card style={{ width: '18rem' }} key={props.item.id}>
        <Card.Img variant="top" src={path + props.item.poster_path} />
        <Card.Body>
          <Card.Title>{props.item.title}</Card.Title>
          <Card.Text>{props.item.release_date}</Card.Text>
          <Card.Text>{props.item.overview}</Card.Text>
          <Button variant="primary" onClick={() => handleShow(props.item)}>
            Add to Favorite
          </Button>
        </Card.Body>
      </Card>
      <ModalMovie
        showFlag={showFlag}
        handleClose={handleClose}
        setClickedMovie={clickedMovie}
        addtoFavorite={addToFav}
        setComments={setComments}
        comments={comments}
      />
    </>
  );
}
export default Movie;