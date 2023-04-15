import axios from 'axios';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

function FeedbackItem({ feedback, feedbackList, fetchFeedbackList }) {

    const deleteFeedback = () => {
        if (window.confirm('Delete?')) {
            axios.delete(`/feedback/${feedback.id}`).then((response) => {
                fetchFeedbackList();
            }).catch((error) => {
                console.log(`Error in deleteFeedback ${error}`);
                alert('Something went wrong!');
            })
        }
    }

    const flagFeedback = () => {

    }

    return (
        <TableBody>
            <TableRow key={feedback.id}>
                <TableCell>{feedback.feeling}</TableCell>
                <TableCell>{feedback.understanding}</TableCell>
                <TableCell>{feedback.support}</TableCell>
                <TableCell>{feedback.comments}</TableCell>
                <TableCell>
                    <Button
                        variant="outlined"
                        className='flagButton'
                        onClick={(event) => flagFeedback(event)}>
                        {feedback.flagged.toString()}
                    </Button>
                </TableCell>
                <TableCell>
                    <Button
                        variant="outlined"
                        className='deleteButton'
                        onClick={(event) => deleteFeedback(event)}>
                        Delete
                    </Button>
                </TableCell>
            </TableRow>
        </TableBody>
    )
}

export default FeedbackItem;
