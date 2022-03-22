import { useHistory } from "react-router-dom";
import styled from "styled-components";

function Main(props) {
  const history = useHistory();
  const weekly = ["월", "화", "수", "목", "금", "토", "일"];
  const circleCount = [0, 1, 2, 3, 4];

  return (
    <Wrap>
      <Title>내 일주일은?</Title>
      {weekly.map((weekly, index) => {
        const Random = (n) => Math.ceil(Math.random() * n);
        const RandomNum = Random(5);
        return (
          <Grade>
            <h2>{weekly}</h2>
            {circleCount.map((e, index) => {
              return (
                <Circle
                  style={{
                    background: index <= RandomNum ? "#ffa07a" : "#ddd",
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
