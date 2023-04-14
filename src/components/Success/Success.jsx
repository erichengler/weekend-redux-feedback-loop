import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import './Success.css';

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
            <button className="newFeedback" onClick={resetForm}>Leave New Feedback</button>
        </>
    )
}

export default Success;