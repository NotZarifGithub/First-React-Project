import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Card from "./Card";
import "tachyons";
import {tools} from "./tools";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Card id={tools[0].id} name={tools[0].name} link={tools[0].link}/>
      <Card id={tools[1].id} name={tools[1].name} link={tools[1].link}/>
      <Card id={tools[2].id} name={tools[2].name} link={tools[2].link}/>
      <Card id={tools[3].id} name={tools[3].name} link={tools[3].link}/>
      <Card id={tools[4].id} name={tools[4].name} link={tools[4].link}/>
      <Card id={tools[5].id} name={tools[5].name} link={tools[5].link}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
