// src/services/itemsService.js
import { db } from './firebase'
import {
    collection,
    addDoc,
    doc,
    getDoc,
    updateDoc,
    deleteDoc,
    onSnapshot,
    query,
    orderBy,
    serverTimestamp
} from 'firebase/firestore'

const colRef = collection(db, 'items')

export const addItem = (data) =>
    addDoc(colRef, { ...data, createdAt: serverTimestamp() })

export const getItem = (id) =>
    getDoc(doc(db, 'items', id))

export const updateItem = (id, data) =>
    updateDoc(doc(db, 'items', id), data)

export const deleteItem = (id) =>
    deleteDoc(doc(db, 'items', id))

export const subscribeToItems = (callback) =>
    onSnapshot(
        query(colRef, orderBy('createdAt', 'desc')),
        snapshot => {
        callback(snapshot.docs.map(d => ({ id: d.id, ...d.data() })))
        }
    )