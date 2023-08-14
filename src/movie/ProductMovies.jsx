import {
  collection,
  getDocs,
  getDoc,
  doc,
  where,
  query,
  updateDoc,
  deleteDoc,
  writeBatch,
  increment,
} from "firebase/firestore";
import { db } from "./config";

const movieRef = collection(db, "products");

export const getMovies = async (category) => {
  const q = category
    ? query(movieRef, where("category", "==", category))
    : movieRef;

  let movies = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    movies = [...movies, { ...doc.data(), id: doc.id }];
  });
  return movies;
};


export const searchMovie = () => {
  return new Promise((res) => {
    res([]);
  });
};

export const getMovie = async (id) => {
  const document = doc(db, 'products', id);
  const docSnap = await getDoc(document);
  if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() };
  return null;
};
export const updateMovie = async (id, item) => {
  const newMovie = await updateDoc(doc(db, "products", id), item);
  return newMovie;
};
export const deleteMovie = async (id) => {
  return await deleteDoc(doc(db, "products", id));
};

export const updateManyMovies = async ( items ) => {
  const batch = writeBatch(db);
  
  items.forEach(({id, cantidad})=>{ 
    console.log (cantidad);
    batch.update(doc(db, "products", id), {stock: increment(-cantidad)})
  })

  batch.commit();
}

