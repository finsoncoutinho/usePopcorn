import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import StarRating from './StarRating';

// function Test() {
//   const [rating, setRating] = useState(0);

//   return (
//     <div>
//       <StarRating maxRating={10} color='blue' onSetRating={setRating} />
//       <p>Rating of this movie is {rating}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={['Very bad', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <StarRating size={24} color='red' defaultRating={3} /> */}
  </React.StrictMode>
);
