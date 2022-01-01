import initializeAuthApp from "../Firebase/firebase.init";
import { signOut,getAuth,GoogleAuthProvider, signInWithPopup,FacebookAuthProvider, onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";



initializeAuthApp()


const useFirebase= () => {
    
  const [defaultUser,setDefaultUser] = useState()

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


   const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      setDefaultUser(user)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

}


const facebookSignIn = () => {
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      setDefaultUser(user)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      // ...
   });
}

const logOut = () => {
  signOut(auth)
  .then(() => {
    setDefaultUser({})
    console.log('user loged out')
  })
}
useEffect(() => {
  onAuthStateChanged(auth, defaultUser => {
      if (defaultUser) {
          setDefaultUser(defaultUser)
      }
      else {
        setDefaultUser({})
      }
  })
}, [])


   return {
       googleSignIn,
       facebookSignIn,
       logOut,
       defaultUser
   }





}


export default useFirebase ;