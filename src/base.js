import {initializeApp} from "firebase/app"
import {getStorage} from "firebase/storage";

export const firebaseConfig = {
  projectId: "blogapp-78990",
  appId: "1:17636496447:web:9755d53b1736430cd9148a",
  databaseURL: "https://blogapp-78990-default-rtdb.firebaseio.com",
  storageBucket: "blogapp-78990.appspot.com",
  locationId: "us-central",
  apiKey: "AIzaSyCuv7S3nkRWrslZ9D_7Nkqe0LtFOjYxTEE",
  authDomain: "blogapp-78990.firebaseapp.com",
  messagingSenderId: "17636496447",
};
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
