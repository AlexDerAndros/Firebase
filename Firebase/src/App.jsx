import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { initializeApp } from "firebase/app";
import {onSnapshot, getDoc, getDocFromCache,doc, getFirestore, addDoc, updateDoc, setDoc, collection, documentId} from 'firebase/firestore';
 const db = getFirestore();
const firebase = initializeApp(firebaseConfig);
const firebaseConfig = {
  apiKey: "AIzaSyDq_9NtGYng1Ra5PtKk_ifQoys6ZH-goMc",
  authDomain: "michael--artist.firebaseapp.com",
  databaseURL: "https://michael--artist-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "michael--artist",
  storageBucket: "michael--artist.appspot.com",
  messagingSenderId: "690442290094",
  appId: "1:690442290094:web:62e0a17e181182ce23fe3f",
  measurementId: "G-GGJ7KLTS88"
};

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
     
    </>
  )
}

export default App
