import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Review.css'
import axios from 'axios';
import Button from '@mui/material/Button';

function Review() {

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

    // Go back functions
    const backToFeeling = () => {
        history.push('/')
    }

    const backToUnderstanding = () => {
        history.push('/understanding')
    }

    const backToSupport = () => {
        history.push('/support')
    }

    const backToComments = () => {
        history.push('/comments')
    }
    // END of go back functions


    return (
        <>
            <h2>Review</h2>
            <br />
            <p>Feeling: {feeling} <br /> <Button onClick={backToFeeling}>Change</Button></p>
            <p>Understanding: {understanding} <br /> <Button onClick={backToUnderstanding}>Change</Button></p>
            <p>Support: {support} <br /> <Button onClick={backToSupport}>Change</Button></p>
            <p>Comments: {comments} <br /> <Button onClick={backToComments}>Change</Button></p>
            <br /><br />
            <Button variant="outlined" className="reviewButton" onClick={sendToServer}>Submit</Button>
        </>
    )
}

export default Review;