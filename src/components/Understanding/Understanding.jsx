import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Material UI Imports
import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import '../textfield.css'

function Understanding() {

    const history = useHistory();
    const dispatch = useDispatch();

    const understandingNumber = useSelector(store => store.understanding)

    const handleChange = (event) => {
        const action = { type: "SET_UNDERSTANDING", payload: event.target.value };
        dispatch(action);
    }

    // Next button brings user to '/support'
    const nextPage = () => {
        if (understandingNumber < 1 || understandingNumber === '' || understandingNumber > 10) {
            alert('Please enter a number 1 - 10');
        } else {
            history.push('/support');
        }
    }

    return (
        <>
            <ProgressBar
                currentStep={1}
            />
            <Grid container justifyContent='center'>
                <Card sx={{
                    paddingTop: 4,
                    paddingBottom: 4,
                    width: '650px'
                }}>
                    <h2>How well are you understanding the content?</h2>
                    <br />
                    <label>Understanding</label>
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

export default Understanding;