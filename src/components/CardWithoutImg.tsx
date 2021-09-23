import styled from "styled-components";

type DataType = {
  data: {
    title?: string,
    desc?: string
  }
}

const CardWithoutImg = (props: DataType): JSX.Element => {
  const {data} = props;
  const {title,desc} = data;
  return( 
    <Card>
      <Board>
        <h3>{title}</h3>
        <p>{desc}</p>
      </Board>
      <Board>
        <h3>{title}</h3>
        <p>{desc}</p>
      </Board>
    </Card>
  )
}
export default CardWithoutImg;

 const Card = styled.section`
  width: 320px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 25px;
  border-radius: 10px;
`;
const Board = styled.article`
  width: 320px;
  height: 220px;
  background: #fff;
  border-radius: 15px;
  transition: all 300ms;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 50px;
  font-family: poppins;
  box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);
  h3 {
    font-size: 15px;
    color: #888;
  }
  p {
    color: #1d1d1f;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.14286;
    padding-top: 20px;
  }
  &:hover {
    transform: scale(1.02);
  }
`;
