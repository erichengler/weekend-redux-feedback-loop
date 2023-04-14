import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Comments.css'

function Comments () {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (event) => {
        const action = { type: "SET_COMMENTS", payload: event.target.value };
        dispatch(action);
    }

    const nextPage = () => {
        history.push('/review');
    }

    return (
        <div>
            <h2>Any comments you want to leave?</h2>
            <label className="comments" htmlFor="comments">Comments</label>
            <br />
            <input 
                type="text" 
                onChange={handleChange} />
            <button onClick={nextPage}>Next</button>
        </div>
    )
}

export default Comments;