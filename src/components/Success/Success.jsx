import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import './Success.css';
import Button from '@mui/material/Button';

function Success () {

    const history = useHistory();
    const dispatch = useDispatch();

    const resetForm = () => {
        dispatch({ type: 'CLEAR_FORM' });
        history.push('/');
    }

    return (
        <>
            <h2>Thank you for your feedback!</h2>
            <Button 
                variant="outlined"
                className="newFeedback" 
                onClick={resetForm}>Leave New Feedback
            </Button>
        </>
    )
}

export default Success;