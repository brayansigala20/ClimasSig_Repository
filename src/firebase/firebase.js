import app from "firebase/app"

import firebaseConfig from "./config"

class Firebase {
    constructor(){
        app.initalizeApp(firebaseConfig)
    }
}

const firebase = new Firebase()

export default firebase