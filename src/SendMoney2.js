import React from 'react';
import bgImage1 from "./images/human1.png";
import bgImage2 from "./images/human2.png";
import bgImage3 from "./images/human3.png";

export const SendMoney = () => {

  class User {

    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }
  }
  var taro = new User('太郎', 32);

  const imgStyle = {
    width: '70px', // 幅を調整
    height: '70px', // 高さを調整
  };

  return (
    <html>
        <head>
        </head>
        <body>
        
        <div className="SendMoney">
            <p>送金相手を選択</p>
        </div>
        

        <p>{taro.age}</p>
        </body>
    </html>
  )
};
