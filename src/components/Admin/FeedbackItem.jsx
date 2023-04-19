import axios from 'axios';
import FlagIcon from '@mui/icons-material/Flag';
import OutlinedFlagTwoToneIcon from '@mui/icons-material/OutlinedFlagTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function FeedbackItem({ feedback, fetchFeedbackList }) {

    // Delete request to delete a feedback entry after confirmation
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

    // PUT request to change flagged from false to true
    const flagFeedback = (event) => {
        axios.put(`/feedback/${feedback.id}`).then((response) => {
            fetchFeedbackList();
        }).catch((error) => {
            console.log(`Error in PUT ${error}`);
            alert('Something went wrong');
        })
    }

    const flagStatus = () => {
        if (feedback.flagged === true) {
            return <FlagIcon />;
        } else {
            return <OutlinedFlagTwoToneIcon
                onClick={(event) => flagFeedback(event)}
                cursor='pointer'
            />
        }
    }

    return (
        <TableBody>
            <TableRow key={feedback.id}>
                {/* Feedback Entry */}
                <TableCell align='center'>{feedback.feeling}</TableCell>
                <TableCell align='center'>{feedback.understanding}</TableCell>
                <TableCell align='center'>{feedback.support}</TableCell>
                <TableCell align='center' sx={{ maxWidth: '200px' }}>
                    <i>{feedback.comments}</i></TableCell>
                <TableCell align='center'>
                    {/* Flag Icon */}
                    {
                        flagStatus()
                    }
                </TableCell>
                <TableCell align='center'>
                    {/* Delete Button */}
                    <DeleteIcon
                        cursor='pointer'
                        onClick={(event) => deleteFeedback(event)}
                    />
                </TableCell>
            </TableRow>
        </TableBody>
    )
}

export default FeedbackItem;
