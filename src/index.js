import ReactDOM from "react-dom"; //ReactDOM 사용
import App from "./App"; // App 컴포넌트 사용
import { BrowserRouter } from "react-router-dom"; //BrowserRouter는 웹 브라우저가 가지고 있는 주소 관련 정보를 props로 넘겨주는 친구
import './index.css' //index.css 파일 사용(css적용)

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root") //index.html 파일의 body 부분의 root라고 Id 값이 매겨진 부분에 삽입
);
