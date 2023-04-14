import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

function Admin () {

    const dispatch = useDispatch();
    const feedbackList = useSelector(store => store.feedbackList)

    // Get request to get feedback list
    const fetchFeedbackList = () => {
        axios.get('/feedback').then(response => {
            dispatch({ type: 'SET_FEEDBACK_LIST', payload: response.data });
        }).catch(error => {
            alert('Something went wrong!');
        });
    }

    useEffect(() => {
        fetchFeedbackList();
    }, []);

    // TODO : FIX DELETE REQUEST!!
    const deleteFeedback = (event) => {
        axios.delete(`/feedback/${feedbackList.id}`).then((response) => {
            fetchFeedbackList();
        }).catch((error) => {
            console.log(`Error in deleteFeedback ${error}`);
            alert('Something went wrong!');
        })
    }

    return (
        <>
            <h2>Feedback Results</h2>
            {
                feedbackList.map(feedback => (
                    <div key={feedback.id}>
                        <p>Feeling: {feedback.feeling}</p>
                        <p>Understanding: {feedback.understanding}</p>
                        <p>Support: {feedback.support}</p>
                        <p>Comments: {feedback.comments}</p>
                        <button className='deleteButton' onClick={ (event) => deleteFeedback(event) }>Delete</button>
                        <br /><br />
                        <hr />
                    </div>
                ))
            }
        </>
    )
}

export default Admin;