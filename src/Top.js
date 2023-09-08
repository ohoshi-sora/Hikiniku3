import React, {Component} from 'react';
import bgImage from "./images/human1.png";
import { useNavigate } from "react-router-dom";
import './top.css';
import users from "./UserInfo";

export const Top = () => {

  const navigate = useNavigate()

//DBへのアクセスは後で
  const zandaka = "10000";

  return (
    <html>
        <head>
        </head>
        <body>
        <div className="Step1">
          <div className="container">
            <figure class="image"><img src={bgImage} /></figure>
            <div class="right">
            <p class="title">ユーザー名:{users[0].name}</p>
            <p class="text">口座番号:{users[0].number}<br/>
            預金残高:{users[0].deposit}円</p>
            </div>
            
          </div> 
        </div>
        <div class="button003">
          <a hreh="#">
          <button onClick={() => navigate("SendMoney")}>送金画面へ</button>
          </a>
        </div>
        
        </body>
    </html>
  )
};
//export default Step1;
