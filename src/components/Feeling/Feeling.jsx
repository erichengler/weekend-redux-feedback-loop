import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import '../textfield.css'

function Feeling () {

    const dispatch = useDispatch();
    const history = useHistory();

    const feelingNumber = useSelector(store => store.feeling);

    const handleChange = (event) => {
        const action = { type: "SET_FEELING", payload: event.target.value };
        dispatch(action);
    }

    const nextPage = () => {
        if ( feelingNumber < 1 || feelingNumber === '' || feelingNumber > 10 ) {
            alert('Please enter a number 1 - 10');
        } else {
            history.push('/understanding');
        }
    }
    
    return (
        <Grid container justifyContent='center'>
            <Card sx={{ padding: 2, minWidth: 350, maxWidth: 350 }}>
                <h2>Hey there! How are you feeling today?</h2>
                    <br />
                <label>Feeling?</label>
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

export default Feeling;