import { useHistory } from "react-router-dom";
import styled from "styled-components";

function Main(props) {
  const weekly = ["월", "화", "수", "목", "금", "토", "일"];
  const history = useHistory();
  const circleCount = [0,1,2,3,4];
  const RandomGrade = () => {
    return Math.ceil(Math.random() * 5)
  };
  const circleColor = () => {
    let result =[];
    
    for (let i = 0; i < circleCount.length; i++) {
      result.push(<Circle style={{
        backgroundColor: "#ddd"
      }}></Circle>);
    } 
    
    for (let i = 0; i < RandomGrade(); i++) {
      result.push(<Circle  style={{
        backgroundColor: "#ffa07a"
    }}></Circle>)
  }return result
}

  return (
    <Wrap>
      <Title>내 일주일은?</Title>

      <WeeklyGrade>
        <Grade>
          <h2>{weekly[0]}</h2>
          {circleColor()}
          <UpdateBtn
            onClick={() => {
              history.push(`/UpdateGrade/${weekly[0]}`);
            }}
            className="UpdateBtn"
          />
        </Grade>
      </WeeklyGrade>

      <WeeklyGrade>
        <Grade>
          <h2>{weekly[1]}</h2>
          {circleCount.map((a, idx) => {
            return <Circle />;
          })}
        </Grade>
        <UpdateBtn
          onClick={() => {
            history.push(`/UpdateGrade/${weekly[1]}`);
          }}
          className="UpdateBtn"
        />
      </WeeklyGrade>

      <WeeklyGrade>
        <Grade>
          <h2>{weekly[2]}</h2>
          {circleCount.map((a, idx) => {
            return <Circle style={{
              backgroundColor: circleCount < RandomGrade ? "#ddd" : "#ffa07a"
            }}/>;
          })}
        </Grade>
        <UpdateBtn
          onClick={() => {
            history.push(`/UpdateGrade/${weekly[2]}`);
          }}
          className="UpdateBtn"
        />
      </WeeklyGrade>

      <WeeklyGrade>
        <Grade>
          <h2>{weekly[3]}</h2>
          {circleCount.map((a, idx) => {
            return <Circle />;
          })}
          <UpdateBtn
            onClick={() => {
              history.push(`/UpdateGrade/${weekly[3]}`);
            }}
            className="UpdateBtn"
          />
        </Grade>
      </WeeklyGrade>

      <WeeklyGrade>
        <Grade>
          <h2>{weekly[4]}</h2>
          {circleCount.map((a, idx) => {
            return <Circle/>;
          })}
          <UpdateBtn
            onClick={() => {
              history.push(`/UpdateGrade/${weekly[4]}`);
            }}
            className="UpdateBtn"
          />
        </Grade>
      </WeeklyGrade>

      <WeeklyGrade>
        <Grade>
          <h2>{weekly[5]}</h2>
          {circleCount.map((a, idx) => {
            return <Circle />;
          })}
          <UpdateBtn
            onClick={() => {
              history.push(`/UpdateGrade/${weekly[5]}`);
            }}
            className="UpdateBtn"
          />
        </Grade>
      </WeeklyGrade>

      <WeeklyGrade>
        <Grade>
          <h2>{weekly[6]}</h2>
          {circleCount.map((a, idx) => {
            return <Circle />;
          })}
          <UpdateBtn
            onClick={() => {
              history.push(`/UpdateGrade/${weekly[6]}`);
            }}
            className="UpdateBtn"
          />
        </Grade>
      </WeeklyGrade>
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

const WeeklyGrade = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
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
