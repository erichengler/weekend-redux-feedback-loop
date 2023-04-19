import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// MaterialUI Imports
import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

function Comments() {

    // Hooks
    const dispatch = useDispatch();
    const history = useHistory();
    const comments = useSelector(store => store.comments)

    const handleChange = (event) => {
        const action = { type: "SET_COMMENTS", payload: event.target.value };
        dispatch(action);
    }

    // Next button brings user to '/review'
    const nextPage = () => {
        history.push('/review');
    }

    return (
        <>
            <ProgressBar
                currentStep={3}
            />
            <Grid container justifyContent='center'>
                <Card sx={{
                    paddingTop: 4,
                    paddingBottom: 4,
                    width: '650px'
                }}>
                    <h2>Would you like to leave any comments for us?</h2>
                    <br />
                    <label>Comments</label>
                    <br />
                    <TextField
                        multiline
                        rows={3}
                        defaultValue={comments}
                        type="text"
                        onChange={handleChange} />
                    <br />
                    <Button onClick={nextPage}>Next</Button>
                </Card>
            </Grid>
        </>
    )
}

export default Comments;