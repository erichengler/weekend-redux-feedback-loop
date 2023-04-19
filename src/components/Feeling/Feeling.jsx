import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// MaterialUI imports
import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import '../textfield.css'

function Feeling() {

    // Hooks
    const dispatch = useDispatch();
    const history = useHistory();

    const feelingNumber = useSelector(store => store.feeling);

    const handleChange = (event) => {
        const action = { type: "SET_FEELING", payload: event.target.value };
        dispatch(action);
    }

    // Next button brings user to '/understanding'
    const nextPage = () => {
        if (feelingNumber < 1 || feelingNumber === '' || feelingNumber > 10) {
            alert('Please enter a number 1 - 10');
        } else {
            history.push('/understanding');
        }
    }

    return (
        <>
            <ProgressBar
                currentStep={0}
            />
            <Grid container justifyContent='center'>
                <Card sx={{
                    paddingTop: 4,
                    paddingBottom: 4,
                    width: '650px'
                }}>
                    <h2>Why hello there! How are you feeling today?</h2>
                    <br />
                    <label>Feeling</label>
                    <br />
                    <TextField
                        type="number"
                        placeholder="1-10"
                        onChange={handleChange} />
                    <br />
                    <Button onClick={nextPage}>Next</Button>
                </Card>
            </Grid>
        </>
    )
}

export default Feeling;