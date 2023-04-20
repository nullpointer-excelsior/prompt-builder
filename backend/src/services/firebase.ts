import { initializeApp } from "firebase/app";
import { DocumentData, getDocs, getDoc, getFirestore, collection, addDoc, doc, setDoc, deleteDoc } from "firebase/firestore";
import dotenv from 'dotenv';

dotenv.config();
const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface FirebaseDocument {
    id: string;
    [key: string]: any;
}

export async function addDocument<T extends { [x: string]: any; }>(collectionName: string, document: T) {
    return addDoc(collection(db, collectionName), document).then(docRef => docRef.id)
}

export async function setDocument<T extends { [x: string]: any; }>(collectionName: string, id: string, document: T) {
    const docRef = collection(db, collectionName);
    await setDoc(doc(docRef, id), document);
}

export async function getDocumentById<T extends FirebaseDocument>(collectionName: string, docId: string): Promise<T> {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { 
            id: docSnap.id,
            ...docSnap.data()
        } as T;
    }
    return null
}

export async function getDocuments(document: string): Promise<DocumentData> {
    const querySnapshot = await getDocs(collection(db, document));
    return querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
}

export async function deleteDocumentById(collection: string, id: string) {
    await deleteDoc(doc(db, collection, id))
}