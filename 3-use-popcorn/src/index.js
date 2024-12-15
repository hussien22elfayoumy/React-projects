import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StarRating from './StarRating';

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating maxRating={10} color='blue' onSetRating={setMovieRating} />
//       <p>this movie was rated {movieRating} times</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <StarRating maxRating={5} defaultRating={3} />
    <StarRating maxRating={7} />
    <Test /> */}
    <App />
  </React.StrictMode>
);
