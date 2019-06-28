import 'firebase/database';
import app from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyC_5-hLEHsMUXsmFxtTcqdCQ6zFeVaNrgo",
    authDomain: "mathanapp-62abf.firebaseapp.com",
    databaseURL: "https://mathanapp-62abf.firebaseio.com",
    projectId: "mathanapp-62abf",
    storageBucket: "mathanapp-62abf.appspot.com",
    messagingSenderId: "759376390332",
    appId: "1:759376390332:web:c1a303fb53804134"
  };

  class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.db = app.database();
    }
  }
  
  export default Firebase;