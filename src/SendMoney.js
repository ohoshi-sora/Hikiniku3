import React from 'react';
import bgImage1 from "./images/human1.png";
import bgImage2 from "./images/human2.png";
import bgImage3 from "./images/human3.png";
import { useNavigate } from "react-router-dom";
import users from "./UserInfo";

export const SendMoney = () => {
  //  class User {

  //    constructor( name, number, deposit) {
  //        this.name = name;
  //        this.number = number;
  //        this.deposit = deposit;
  //    }
  //  }
  // var users = [];
  // users[0] = new User('太郎', 123, 10000);
  // users[1] = new User('太郎2', 456, 50000);

  // const users = [
  //   {name:"サンプル太郎", url: bgImage1},
  //   {name:"サンプル次郎", url: bgImage2},
  //   {name:"サンプル三郎", url: bgImage3}
  // ]
  
  const imgStyle = {
    width: '70px', // 幅を調整
    height: '70px', // 高さを調整
  };
  const navigate = useNavigate()
  return (
    <html>
        <head>
        </head>
        <body>
        
        <div className="SendMoney">
            <p>送金相手を選択</p>
        </div>
        

        {/* <ol>
          {users.map((users, index) => (
            <li key={index}>
              <img src={users.url} alt={users.name} style={imgStyle}/>
              {users.name}
            </li>
          ))}
        </ol>
        <p onClick={() => navigate("../SelectMoney")}>{users[0].name}</p> */}
        <ul>
          <li onClick={() => navigate("../SelectMoney")}>
          <img src={bgImage2}style={imgStyle}/>{users[1].name}</li>
          <li onClick={() => navigate("../SelectMoney")}>
          <img src={bgImage3}style={imgStyle}/>{users[2].name}</li>
        </ul>

        <button onClick={() => navigate("../")}>戻る</button>
        </body>
    </html>
  )
};