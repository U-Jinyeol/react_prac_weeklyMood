import { useState } from "react"; //useState 훅 사용
import { useHistory, useParams } from "react-router-dom"; //둘다 부모 데이터를 받아서 찾지 않아도 바로 히스토리, 파라미터 객체에 접근하는 훅
import styled from "styled-components";

function UpdateGrade(props) {
  const history = useHistory();
  const params = useParams();
  const circleCount = [0,1,2,3,4];
  const [circleNum, setCircleNum] = useState(0);

  //params.파라미터 이름
  //동그라미를 클릭할 때 마다 색칠을 해줘야해서 map을 통해 각 동그라미가 클릭 되는 순간 배열의 위치값을 비교해 색칠
  return (
    <Update>
      <Header>
        <Day>{params.update_week}요일</Day> 평점 남기기
      </Header>
      <Grade>
        {circleCount.map ((a,idx) => {
          return (
          <Circle
              onClick={() => {
                setCircleNum(idx + 1);
              }}
              style={{
                backgroundColor: circleNum < idx + 1 ? "#ddd" : "#ffa07a"
              }}
            ></Circle>
          );
        })}
      </Grade>
      <CheckBtn
        className="CheckBtn"
        onClick={() => {
          history.push("/");
        }}
      >
        평점 남기기
      </CheckBtn>
    </Update>
  );
}

const Update = styled.div`
  text-align: center;
  max-width: 350px;
  width: 80vw;
  height: 70vh;
  margin: 5vh auto;
  padding: 5vh 0px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: white;
`;

const Header = styled.h1`
  color: #5d6d7e;
`;

const Day = styled.span`
  background-color: #5d6d7e;
  border-radius: 10px;
  width: 110px;
  display: inline-block;
  color: white;
`;

const CheckBtn = styled.div`
  border: none;
  background-color: #ffa07a;
  font-weight: 800;
  font-size: 20px;
  color: white;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  text-align: center;
  line-height: 40px;
  margin-left: auto;
  margin-right: auto;
`;

const Grade = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-left: 5px;
  margin-right: 5px;
`;

export default UpdateGrade;
