import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Support.css'

function Support () {

    const history = useHistory();
    const dispatch = useDispatch();

    const supportNumber = useSelector(store => store.support)

    const handleChange = (event) => {
        const action = { type: "SET_SUPPORT", payload: event.target.value };
        dispatch(action);
    }

    const nextPage = () => {
        if ( supportNumber === 0 || supportNumber === '' ) {
            alert('Please enter a number 1 - 10');
        } else {
            history.push('/comments');
        }
    }

    return (
        <div>
            <h2>How well are you being supported?</h2>
            <label className="support" htmlFor="support">Support?</label>
            <br />
            <input 
                type="number" 
                min="1" max="10" 
                placeholder="1-10"
                onChange={handleChange} />
            <button onClick={nextPage}>Next</button>
        </div>
    )
}

export default Support;