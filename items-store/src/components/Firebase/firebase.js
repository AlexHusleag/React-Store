import app from 'firebase';

var config = {
    apiKey: "AIzaSyBWvQQtdEfkY7IFhTvAPaSp3p_TawggzRs",
    authDomain: "online-shop-9b530.firebaseapp.com",
    databaseURL: "https://online-shop-9b530.firebaseio.com",
    projectId: "online-shop-9b530",
    storageBucket: "online-shop-9b530.appspot.com",
    messagingSenderId: "105372292794",
    appId: "1:105372292794:web:063734cb7e3aa3f59d9483",
    measurementId: "G-1LGCY1TNSP"
};

export default class Firebase {
    constructor() {
        app.initializeApp(config);
    }

    accessFirebase = () => {
        let db = app.firestore();
        return db.collection("cars");
    }
}


