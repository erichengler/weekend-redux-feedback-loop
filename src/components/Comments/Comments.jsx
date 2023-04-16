import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

function Comments () {

    const dispatch = useDispatch();
    const history = useHistory();
    const comments = useSelector(store => store.comments)

    const handleChange = (event) => {
        const action = { type: "SET_COMMENTS", payload: event.target.value };
        dispatch(action);
    }

    const nextPage = () => {
        history.push('/review');
    }

    return (
        <Grid container justifyContent='center'>
            <Card sx={{ padding: 2, minWidth: 350, maxWidth: 350 }}>
                <h2>Any comments you want to leave for us?</h2>
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
    )
}

export default Comments;