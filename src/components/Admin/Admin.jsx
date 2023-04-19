import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
// MaterialUI imports
import FeedbackItem from './FeedbackItem';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Admin() {

    // Hooks
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
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Feeling</TableCell>
                            <TableCell align='center'>Understanding</TableCell>
                            <TableCell align='center'>Support</TableCell>
                            <TableCell align='center'>Comments</TableCell>
                            <TableCell align='center'>Flag</TableCell>
                            <TableCell align='center'>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    {
                        feedbackList.map(feedback => (
                            <FeedbackItem
                                key={feedback.id}
                                feedback={feedback}
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