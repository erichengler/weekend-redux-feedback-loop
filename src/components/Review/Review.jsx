import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Review.css'
import axios from 'axios';

function Review () {

    const history = useHistory();

    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);
    const flagged = useSelector(store => store.flagged);

    const sendToServer = () => {
        axios.post('/feedback', {
            feeling: feeling,
            understanding: understanding,
            support: support,
            comments: comments,
            flagged: flagged
        }).then(response => {
            history.push('/success');
        }).catch(error => {
            alert('Something went wrong!');
            console.log(error);
        })
    }

    return (
        <div>
            <h2>Review</h2>
            <p>Feeling: {feeling}</p>
            <p>Understanding: {understanding}</p>
            <p>Support: {support}</p>
            <p>Comments: {comments}</p>
            <p>Flagged: {flagged.toString()}</p>
            <button className="reviewButton" onClick={sendToServer}>Submit</button>
        </div>
    )
}

export default Review;