import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
// MaterialUI Imports
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

function Success () {

    // Hooks
    const history = useHistory();
    const dispatch = useDispatch();

    // Clears reducers and sends the user back to '/'
    const resetForm = () => {
        dispatch({ type: 'CLEAR_FORM' });
        history.push('/');
    }

    return (
        <Grid container justifyContent='center'>
            <Card sx={{ padding: 2, minWidth: 350, maxWidth: 350 }}>
            <h2>Thank you for your feedback!</h2>
            <Button 
                variant="outlined"
                className="newFeedback" 
                onClick={resetForm}>Leave New Feedback
            </Button>
                <br /><br />
            </Card>
        </Grid>
    )
}

export default Success;