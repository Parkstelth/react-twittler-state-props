import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Sidebar from './Sidebar';
import Tweets from './Pages/Tweets';
import MyPage from './Pages/MyPage';
import About from './Pages/About';

import './App.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Sidebar />
          <section className="features">
            {/* <Route exact path="/"> */}
              <Switch>

                <Route exact path="/">
                  <Tweets />
                </Route>

                <Route path="/about">
                  <About/>
                </Route>

                <Route path="/mypage">
                  <MyPage />
                </Route>

              </Switch>
            {/* </Route> */}
            {/* TODO : 유어클래스를 참고해서, 테스트 케이스를 통과하세요.
            TODO : React Router DOM 설치 후 BrowserRouter, Route의 주석을 해제하고 Swtich 컴포넌트를 적절하게 작성합니다. */}
          </section>
        </main>
      </div>
    // </BrowserRouter>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export default App;
