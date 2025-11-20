// src/services/authService.js
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
    signInWithPopup,
    onAuthStateChanged
} from 'firebase/auth'
import { auth, googleProvider } from './firebase'

export const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)

export const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

export const signOut = () => firebaseSignOut(auth)

export const signInGoogle = () => signInWithPopup(auth, googleProvider)

export const subscribeToAuth = (callback) =>
    onAuthStateChanged(auth, (user) => callback(user))