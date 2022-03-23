import Main from "./Main"; //Main 컴포넌트 사용
import UpdateGrade from "./UpdateGrade"; //UpdateGrade 컴포넌트 사용
import { Route } from "react-router-dom"; //Route 훅을 사용, react-router-dom 설치 필요, 적용한 버전은 5.3.0, yarn add react-router-dom@5.3.0

//App 컴포넌트 함수
function App() {

  // 라우트는 <a> 태그처럼 화면이 Reloading 되지 않고 한 페이지에서 url이 변경되는 SPA 방식
  // path는 라우트 시켜줄 주소
  // exact는 정확한 주소일 때만 라우트 하는 기능
  // ex) exact를 안쓰면 "/about/company/" 는 "AboutPage"와 "AboutCompanyPage"를 같이 보여주게 됨
  // "/UpdateGrade/:update_week"는 각 요일에 맞는 화면을 보여주기 위한 파라미터
  // 다음과 같이 써도 무방 -> <Route path="/UpdateGrade/:update_week" component={UpdateGradet}/>
  return (
    <div className="App">
      <Route path="/" exact>
        <Main />
      </Route> 
      <Route path="/UpdateGrade/:update_week" exact>
        <UpdateGrade />
      </Route>
    </div>
  );
}

export default App;
