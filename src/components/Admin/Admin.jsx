import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import FeedbackItem from './FeedbackItem';
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

    return (
        <>
            <h2>Feedback Results</h2>
            {
                feedbackList.map(feedback => (
                    <FeedbackItem
                        key={feedback.id}
                        feedback={feedback}
                        fetchFeedbackList={fetchFeedbackList}
                    />
                ))
            }
        </>
    )
}

export default Admin;