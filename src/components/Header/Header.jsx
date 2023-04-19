import AppBar from '@mui/material/AppBar';
import '../App/App.css'

function Header () {
    return (
        <>
            <AppBar position="static" className='App-header'>
                <h1 className='App-title'>Feedback</h1>
            </AppBar>
        </>
    )
}

export default Header;