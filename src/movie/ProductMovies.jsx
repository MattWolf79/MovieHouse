import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../Firebase/config";

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

// export const getMovies = () =>{
//   // const _movies = id
//   // ? movies.filter((movie) => movie.category.toLowerCase() === id)
//   //   : movies;
//   //   return new Promise((res)=>{
//   //       setTimeout(()=>{
//   //           res(_movies)
//   //       },1000)
//   //   })
// }

export const searchMovie = () => {
  // const movie = movies.filter((movie) => movie.title.toLowerCase().includes(title) );
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


