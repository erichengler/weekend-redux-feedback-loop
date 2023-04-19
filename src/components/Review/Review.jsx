import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
// MaterialUI Imports
import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

function Review() {

    // Hook
    const history = useHistory();

    // Retrieving values from reducers
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);
    const flagged = useSelector(store => store.flagged);

    // POST request to send feedback entry to server
    const sendToServer = () => {
        axios.post('/feedback', {
            feeling: feeling,
            understanding: understanding,
            support: support,
            comments: comments,
            flagged: flagged
        }).then(response => {
            // Next button brings user to '/success'
            history.push('/success');
        }).catch(error => {
            alert('Something went wrong!');
            console.log(error);
        })
    }

    //  ---- Go back functions ----
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
    //  ---- End of go back functions ----


    return (
        <>
            <ProgressBar
                currentStep={4}
            />
            <Grid container justifyContent='center'>
                <Card sx={{
                    paddingTop: 4,
                    paddingBottom: 4,
                    width: '650px'
                }}>
                    <h2>Feedback Review</h2>
                    <br />
                    <p>Feeling: {feeling} <br /> <Button onClick={backToFeeling}>Change</Button></p>
                    <p>Understanding: {understanding} <br /> <Button onClick={backToUnderstanding}>Change</Button></p>
                    <p>Support: {support} <br /> <Button onClick={backToSupport}>Change</Button></p>
                    <p>Comments: {comments} <br /> <Button onClick={backToComments}>Change</Button></p>
                    <br />
                    <Button variant="outlined" className="reviewButton" onClick={sendToServer}>Submit</Button>
                    <br /><br />
                </Card>
            </Grid>
        </>
    )
}

export default Review;