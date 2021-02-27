import React from 'react'
import Logout from '../Logout'
import Quiz from '../Quiz'
import { FirebaseContext } from '../Firebase';
import { useHistory } from 'react-router-dom';

const Welcome = () => {
    const firebase = React.useContext(FirebaseContext);
    const [userSession, setUserSession] = React.useState(null);
    const history = useHistory();

    React.useEffect(() => {
        let listener = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : history.push('/')

        })

        return () => {
            listener()
        }
    }, [firebase.auth, history])

    return userSession === null ? (
        <React.Fragment>
            <div className="loader"></div>
            <p>Loading...</p>
        </React.Fragment>
    ) : (
            <div className="quiz-bg">
                <div className="container">
                    <Logout />
                    <Quiz />
                </div>
            </div>
        )
}

export default Welcome
