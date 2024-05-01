import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TagCarousel from "./App";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const tags = ["Gaming", "Gaming", "Gaming", "Gaming", "Gaming", "Gaming", "Gaming", "Gaming", "Gaming", "Gaming", "Gaming", "Gaming", "Gaming",  "Gaming",  "Gaming",  "Gaming",  "Music", "Mobile Legends: Bang Bang", "Test drives", "Monkey D. Luffy", "Playlists", "Pistons", "Drag Racing", "Counter-Strike 2", "2000s", "Jon Bon Jovi", "League of Legends", "Brazilian"];


root.render(
  <React.StrictMode>
      <TagCarousel tags={tags} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
