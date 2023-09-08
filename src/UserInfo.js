//export const UserInfo = () => {

class User {

    constructor( name, number, deposit) {
        this.name = name;
        this.number = number;
        this.deposit = deposit;
    }
  }
  const users = [
    new User('ひき肉食べたい太郎', 123, 50000),
    new User('次郎', 456, 80000),
    new User('三郎', 789, 100000),
  ];
  
  export default users;
//}
