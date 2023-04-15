import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Comments.css'

function Comments () {

    const dispatch = useDispatch();
    const history = useHistory();
    const comments = useSelector(store => store.comments)

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
                defaultValue={comments}
                type="text" 
                onChange={handleChange} />
            <Button onClick={nextPage}>Next</Button>
        </div>
    )
}

export default Comments;