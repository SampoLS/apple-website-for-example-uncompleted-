import styled from "styled-components";
type TitleType = {
  titleData: {
    titleHead: string;
    descption: string;
  };
};

const Title = (props: TitleType): JSX.Element => {
  const {
    titleData: { titleHead, descption },
  } = props;
  return (
    <TitleBox>
      <h2>{titleHead}</h2>
      <span>{descption}</span>
    </TitleBox>
  );
};
export default Title;
const TitleBox = styled.div`
  h2,
  span {
    font-family: roboto;
    color: #6e6e73;
    font-size: 28px;
    font-weight: 500;
    display: inline;
    letter-spacing: -0.02rem;
  }
`;
