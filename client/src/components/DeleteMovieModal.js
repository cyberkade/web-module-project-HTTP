import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios';

const DeleteMovieModal = (props) => {

    const { deleteMovie } = props;

    const { id } = useParams();
    const { push } = useHistory();

    useEffect(() => {
        console.log(id);
    },[])

    const handleClick = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:5000/api/movies/${id}`)
        .then(res => {
            console.log(res.data);
            deleteMovie(res.data);
            push('/movies')
        })
        .catch(err => console.log(err))
    }

    const handleCancel = () => {
        push(`/movies/${id}`)
    }

    return (<div id="deleteMovieModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">						
                        <h4 className="modal-title">Delete Movie</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body">					
                        <p>Are you sure you want to delete these records?</p>
                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                    </div>
                    <div className="modal-footer">
                        <input onClick={handleCancel} type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                        <input onClick={handleClick} type="submit" className="btn btn-danger" value="Delete"/>
                    </div>
                </form>
            </div>
        </div>
    </div>)
}

export default DeleteMovieModal;
