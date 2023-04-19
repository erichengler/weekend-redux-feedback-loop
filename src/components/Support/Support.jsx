import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// MaterialUI Imports
import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import '../textfield.css'

function Support() {

    // Hooks
    const history = useHistory();
    const dispatch = useDispatch();

    const supportNumber = useSelector(store => store.support)

    const handleChange = (event) => {
        const action = { type: "SET_SUPPORT", payload: event.target.value };
        dispatch(action);
    }

    // Next button brings user to '/comments'
    const nextPage = () => {
        if (supportNumber < 1 || supportNumber === '' || supportNumber > 10) {
            alert('Please enter a number 1 - 10');
        } else {
            history.push('/comments');
        }
    }

    return (
        <>
            <ProgressBar
                currentStep={2}
            />
            <Grid container justifyContent='center'>
                <Card sx={{
                    paddingTop: 4,
                    paddingBottom: 4,
                    width: '650px'
                }}>
                    <h2>How well do you feel you are being supported?</h2>
                    <br />
                    <label>Support</label>
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

export default Support;