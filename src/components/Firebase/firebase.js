import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC6AN6hFoEBGYcKRv1bcuT7nzqOLbf2hEw",
    authDomain: "marvel-quiz-a0bd5.firebaseapp.com",
    projectId: "marvel-quiz-a0bd5",
    storageBucket: "marvel-quiz-a0bd5.appspot.com",
    messagingSenderId: "660159393929",
    appId: "1:660159393929:web:4d4787e6892d90e4921658"
}

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    //Inscription
    signupUser = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

    //Connexion
    loginUser = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

    //Deconnexion
    signOutUser = () => this.auth.signOut();
}

export default Firebase;