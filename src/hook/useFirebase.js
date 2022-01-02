import initializeAuthApp from "../Firebase/firebase.init";
import { signOut,getAuth,GoogleAuthProvider, signInWithPopup,FacebookAuthProvider, onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";



initializeAuthApp()


const useFirebase= () => {
    
  const [user,setUser] = useState({})

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

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
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
        setUser({});
          alert('dasasd')
      }).catch((error) => {

      });
}

useEffect(() => {
  onAuthStateChanged(auth, user => {
      if (user) {
          setUser(user)
          console.log(user)
      }
      else {
          setUser({})
      }
  })
}, [])

   return {
       googleSignIn,
       facebookSignIn,
       logOut,
       user
   }





}


export default useFirebase ;