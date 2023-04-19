import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
// MaterialUI Imports
import ProgressBar from "../ProgressBar/ProgressBar";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

function Success() {

    // Hooks
    const history = useHistory();
    const dispatch = useDispatch();

    // Clears reducers and sends the user back to '/'
    const resetForm = () => {
        dispatch({ type: 'CLEAR_FORM' });
        history.push('/');
    }

    return (
        <>
            <ProgressBar
                currentStep={5}
            />
            <Grid container justifyContent='center'>
                <Card sx={{
                    paddingTop: 4,
                    paddingBottom: 4,
                    width: '650px'
                }}>
                    <h2>Thank you for giving us your feedback!</h2>
                    <br />
                    <Button
                        variant="outlined"
                        className="newFeedback"
                        onClick={resetForm}>Leave New Feedback
                    </Button>
                    <br /><br />
                </Card>
            </Grid>
        </>
    )
}

export default Success;