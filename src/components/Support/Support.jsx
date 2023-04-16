import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import '../textfield.css'

function Support () {

    const history = useHistory();
    const dispatch = useDispatch();

    const supportNumber = useSelector(store => store.support)

    const handleChange = (event) => {
        const action = { type: "SET_SUPPORT", payload: event.target.value };
        dispatch(action);
    }

    const nextPage = () => {
        if ( supportNumber < 1 || supportNumber === '' || supportNumber > 10) {
            alert('Please enter a number 1 - 10');
        } else {
            history.push('/comments');
        }
    }

    return (
        <Grid container justifyContent='center'>
            <Card sx={{ padding: 2, minWidth: 350, maxWidth: 350 }}>
                <h2>How well are you being supported?</h2>
                    <br />
                <label>Support?</label>
                    <br />
                <TextField
                    type="number" 
                    placeholder="1-10"
                    onChange={handleChange} />
                    <br />
                <Button onClick={nextPage}>Next</Button>
            </Card>
        </Grid>
    )
}

export default Support;