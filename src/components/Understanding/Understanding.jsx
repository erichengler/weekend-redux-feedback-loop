import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Understanding.css'

function Understanding () {

    const history = useHistory();
    const dispatch = useDispatch();

    const understandingNumber = useSelector(store => store.understanding)

    const handleChange = (event) => {
        const action = { type: "SET_UNDERSTANDING", payload: event.target.value };
        dispatch(action);
    }

    const nextPage = () => {
        if ( understandingNumber < 1 || understandingNumber === '' || understandingNumber > 10 ) {
            alert('Please enter a number 1 - 10');
        } else {
            history.push('/support');
        }
    }

    return (
        <div>
            <h2>How well are you understanding the content?</h2>
            <label className="understanding" htmlFor="understanding">Understanding?</label>
            <br />
            <input 
                type="number" 
                min="1" max="10" 
                placeholder="1-10"
                onChange={handleChange} />
            <Button onClick={nextPage}>Next</Button>
        </div>
    )
}

export default Understanding;