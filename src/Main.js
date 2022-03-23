import { useHistory } from "react-router-dom"; //useHistory gnrdms histroy 객체에 바로 접근하는 방법으로 주로 페이지 이동에 쓰임
import styled from "styled-components"; // 스타일드 컴포넌트는 jsx 내에서 css를 사용하는 하나의 방법

//Main 컴포넌트 함수
function Main(props) {
  const history = useHistory(); //useHistory 훅 선언
  const weekly = ["월", "화", "수", "목", "금", "토", "일"]; //요일 배열 선언, 다음에는 useState를 써보도록 하자
  const circleCount = [0, 1, 2, 3, 4]; //동그라미 갯수를 위한 배열 선언

  return (
    <Wrap>
      <Title>내 일주일은?</Title>
      {/* map 메소드를 통해 월~일 요일을 각자 한번 씩 찍게 만들고
      각 요일마다 랜덤넘버가 따르도록 같은 구간에 썼다. ex. 일요일/랜덤넘버 5, 월요일/랜덤넘버 4 ... 
      Math.random은 0이상 1 미만의 난수(0.1, 0.3, 0.9등)를 랜덤으로 보내주기에 1~5까지의 구간을 위해 5를 곱해주고 Math.ceil을 통해 나머지를 올림함
      
      요일마다 circle을 만들어 주기 위해 첫번째 map 내부에서 또 한 번 map을 돌리고
      그때의 동그라미 색이 랜덤수가 차례대로 찍히는 5개의 동그라미와 비교해서 랜덤수까지만큼은 주황색, 그 이상의 수는 회색을 칠함
      
      history 훅을 써서 history 객체에 바로 접근해 세모 클릭 시 파라미터값이 저장된 페이지로 이동*/}
      {weekly.map((weekly, index) => {
        const Random = Math.ceil(Math.random() * 5);
        return (
          <Grade>
            <h2>{weekly}</h2>
            {circleCount.map((e, index) => {
              return (
                <Circle
                  style={{
                    background: index <= Random ? "#ffa07a" : "#ddd",
                  }}
                />
              );
            })}
            <UpdateBtn
              onClick={() => {
                history.push(`/UpdateGrade/${weekly}`);
              }}
            />
          </Grade>
        );
      })}
    </Wrap>
  );
}

const Wrap = styled.div`
  background-color: white;
  text-align: center;
  max-width: 350px;
  margin: 5vh auto;
  padding: 5vh 0px;
  box-sizing: border-box;
  border-radius: 5px;
  color: #5d6d7e;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 25px;
`;

const Grade = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  line-height: 60px;
  height: 60px;
  vertical-align: middle;
  font-size: 13px;
  align-items: center;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #ffa07a;
  margin-left: 5px;
  margin-right: 5px;
`;

const UpdateBtn = styled.div`
  width: 0px;
  height: 0px;
  border-left: calc(16px * 1.732) solid #5d6d7e;
  border-top: 16px solid transparent;
  border-bottom: 16px solid transparent;
  display: flex;
  line-height: 62px;
  vertical-align: middle;
`;

export default Main;
