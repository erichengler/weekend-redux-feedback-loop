import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import './Admin.css';
import FeedbackItem from './FeedbackItem';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function Admin() {

    const dispatch = useDispatch();
    const feedbackList = useSelector(store => store.feedbackList)

    // Get request to get feedback list
    const fetchFeedbackList = () => {
        axios.get('/feedback').then(response => {
            dispatch({ type: 'SET_FEEDBACK_LIST', payload: response.data });
        }).catch(error => {
            alert('Something went wrong!');
        });
    }

    useEffect(() => {
        fetchFeedbackList();
    }, []);

    return (
        <>
            <h2>Feedback Results</h2>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Feeling</TableCell>
                            <TableCell>Understanding</TableCell>
                            <TableCell>Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell>Flagged</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    {
                        feedbackList.map(feedback => (
                            <FeedbackItem
                                key={feedback.id}
                                feedback={feedback}
                                feedbackList={feedbackList}
                                fetchFeedbackList={fetchFeedbackList}
                            />
                        ))
                    }
                </Table>
            </TableContainer>
        </>
    )
}

export default Admin;