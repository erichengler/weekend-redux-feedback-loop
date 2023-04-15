import axios from 'axios';

function FeedbackItem({ feedback, fetchFeedbackList }) {

    // TODO : FIX DELETE REQUEST!!
    const deleteFeedback = (event) => {
        axios.delete(`/feedback/${feedback.id}`).then((response) => {
            fetchFeedbackList();
        }).catch((error) => {
            console.log(`Error in deleteFeedback ${error}`);
            alert('Something went wrong!');
        })
    }

    return (
        <>
            <div key={feedback.id}>
                <p>Feeling: {feedback.feeling}</p>
                <p>Understanding: {feedback.understanding}</p>
                <p>Support: {feedback.support}</p>
                <p>Comments: {feedback.comments}</p>
                <button className='deleteButton' onClick={(event) => deleteFeedback(event)}>Delete</button>
                <br /><br />
                <hr />
            </div>
        </>
    )
}

export default FeedbackItem;