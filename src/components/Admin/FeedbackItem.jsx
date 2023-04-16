import axios from 'axios';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function FeedbackItem({ feedback, fetchFeedbackList }) {

    const deleteFeedback = (event) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
            axios.delete(`/feedback/${feedback.id}`).then((response) => {
                fetchFeedbackList();
            }).catch((error) => {
                console.log(`Error in deleteFeedback ${error}`);
                alert('Something went wrong!');
            })
        }
    }

    const flagFeedback = (event) => {
        axios.put(`/feedback/${feedback.id}`).then((response) => {
            fetchFeedbackList();
        }).catch((error) => {
            console.log(`Error in PUT ${error}`);
            alert('Something went wrong');
        })
    }

    return (
        <TableBody>
            <TableRow key={feedback.id}>
                <TableCell align='center'>{feedback.feeling}</TableCell>
                <TableCell align='center'>{feedback.understanding}</TableCell>
                <TableCell align='center'>{feedback.support}</TableCell>
                <TableCell align='center'>{feedback.comments}</TableCell>
                <TableCell align='center'>
                    <Button
                        variant="outlined"
                        className='flagButton'
                        onClick={(event) => flagFeedback(event)}>
                        {feedback.flagged.toString()}
                    </Button>
                </TableCell>
                <TableCell align='center'>
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
