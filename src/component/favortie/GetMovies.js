import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FavoriteModal from './FavoriteModal';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

function GetFavMovies(props) {
    const path = `https://image.tmdb.org/t/p/w500`;

    const [showFlag, setShowFlag] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});
    const [updatedValue , setUpdatedValue] = useState([]);

    const handleShowUpdateModal = (item) => {
        setShowFlag(true);
        setClickedMovie(item);
    }

    const handleClose = () => {
    setShowFlag(false);
    }

    const refreshUpdatedData = (arr)=>{
        setUpdatedValue(arr);
    }   

    const deleteMovie  = (item) =>{
        const serverURL = `${process.env.REACT_APP_serverURL}/delete/${item.id}`;

        axios.delete(serverURL)
        .then(data=>{
            
            refreshUpdatedData(data.data)
        })
        .catch((error)=>{
            console.log(error);
        })
        
    }

    useEffect (() =>{   
        setUpdatedValue(props.favMovieData)
    },[props.favMovieData])
    return (<>
            <div className='container'>
            {updatedValue.map(item => {
            const datefromdb = new Date(item.release_date);
            const NewDate = datefromdb.toISOString().split('T')[0];
            return (
                <div className='movie' key={item.id}>
                    <Card style={{ width: '18rem' }} className='Cards'>
                    <Card.Img variant="top" src={path + item.poster_path} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{NewDate}</Card.Text>
                        <Card.Text>{item.overview}</Card.Text>
                        <Card.Text>{item.comments}</Card.Text>
                        <Button variant="success" onClick={() => { handleShowUpdateModal(item) }}>
                            Update
                        </Button>
                        <Button variant="danger" onClick={()=>{deleteMovie(item)}}>
                            Delete
                        </Button>
                    </Card.Body>
                </Card>
                </div>


            )

        })}
            </div>
        <FavoriteModal
            showFlag={showFlag}
            clickedMovie={clickedMovie}
            handleClose={handleClose}
            refreshUpdatedData ={refreshUpdatedData}
        />
    </>)
}
export default GetFavMovies;