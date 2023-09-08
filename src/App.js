import React from 'react';
import { Redirect, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Signup from './components/Main';
import Login from './components/Login';

const App = () => {

  // 認証確認メソッド
  // → 認証されていない場合、ログインページにリダイレクト
  const RequireAuth = ( props ) => {
    
    const myAuthority = sessionStorage.getItem('AUTHORITY');

    // 権限が「GENERAL」の場合、渡されたコンポーネントをレンダリング
    if(myAuthority=="GENERAL"){
      return props.component;
    }

    // 権限がない場合、ログインページへリダイレクト
    document.location = "/login";

  }

  // 非認証確認メソッド
  const RequireNoAuth = ( props ) => {
    
    const myAuthority = sessionStorage.getItem('AUTHORITY');

    // 権限がない場合、渡されたこのポーネントをレンダリング
    // ※ ログインページとユーザ新規登録ページに適用
    if(myAuthority == null){

      return props.component;

    }

    // 権限が存在する場合、メディア一覧ページへリダイレクト
    document.location = "/main";

  }
  

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/login' element={<RequireNoAuth component={<Login />} />} />
          <Route path='/main' element={<RequireAuth component={<Main />} />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
