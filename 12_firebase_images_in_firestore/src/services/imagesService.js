// services/imagesService.js
import { db } from './firebase'
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  serverTimestamp,
  onSnapshot
} from 'firebase/firestore'

const colRef = collection(db, 'images')

export const saveImageBase64 = (base64) => {
  return addDoc(colRef, {
    image: base64,
    createdAt: serverTimestamp()
  }).then((docRef) => docRef.id) // devuelve el id generado
}

export const getAllImages = async () => {
  const snap = await getDocs(colRef)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
}

export const listenImages = (callback) => {
  // listener en tiempo real; devuelve funcion para desuscribirse
  return onSnapshot(colRef, (snap) => {
    callback(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
  })
}

export const getImageById = async (id) => {
  const ref = doc(db, 'images', id)
  const snap = await getDoc(ref)
  if (!snap.exists()) return null
  return { id: snap.id, ...snap.data() }
}