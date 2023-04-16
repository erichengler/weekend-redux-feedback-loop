import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

function Success () {

    const history = useHistory();
    const dispatch = useDispatch();

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