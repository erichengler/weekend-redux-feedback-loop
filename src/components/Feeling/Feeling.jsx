import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Feeling.css'

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
        <div>
            <h2>How are you feeling today?</h2>
            <label className="feeling" htmlFor="feeling">Feeling?</label>
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

export default Feeling;