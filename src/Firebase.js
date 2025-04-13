
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {getFirestore,addDoc,collection} from 'firebase/firestore'
import { toast } from "react-toastify";
const api_key=import.meta.env.VITE_FIREBASE_API_KEY
const firebaseConfig = {
  apiKey: api_key,
  authDomain: "netflix-clone-248f1.firebaseapp.com",
  projectId: "netflix-clone-248f1",
  storageBucket: "netflix-clone-248f1.firebasestorage.app",
  messagingSenderId: "471643357849",
  appId: "1:471643357849:web:54de4fd30abfb31874ee08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth=getAuth(app)
const db=getFirestore(app)

const signup=async (name,email,password)=>{
    try {
        const res=await createUserWithEmailAndPassword(Auth,email,password)
        const user=res.user
        await addDoc(collection(db,'user'),{
         uid:user.uid,
         name,
         authprovider:'local',
         email
        })
        toast.success("user created Successfully")
        
    } catch (error) {
        const errorMessage=error.code.split("/")[1]
        toast.error(errorMessage)
    }
}

const login=async (email,password)=>{
    try {
        await signInWithEmailAndPassword(Auth,email,password)
        toast.success("Login SuccessFully")
        
    } catch (error) {
        const errorMessage=error.code.split("/")[1]
        toast.error(errorMessage)
    }

}
const logout=()=>{
   signOut(Auth)
   toast.success("Logout SuccessFully")

}


export {signup,login,logout,Auth}