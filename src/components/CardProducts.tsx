import styled from "styled-components";

type Data = {
  cardData: {
    id: number;
    altName?: string;
    title?: string;
    text?: string;
    desc?: string;
    imgUrl?: string;
  };
};
const CardProducts = (props: Data): JSX.Element => {
  const { cardData } = props;
  const { title, text, desc, imgUrl, altName } = cardData;
  return (
    <CardBox>
      <TitleBox>
        <h3>{title!.toUpperCase()}</h3>
        <LinkBox>
          <a href="/">{text}</a>
        </LinkBox>
        <Descption>{desc}</Descption>
      </TitleBox>
      <ImgBox>
        <img src={imgUrl} alt={altName} />
      </ImgBox>
    </CardBox>
  );
};
export default CardProducts;

const CardBox = styled.article`
  width: 400px !important;
  display: block !important;
  overflow: hidden;
  padding-top: 25px;
  padding-bottom: 40px;
 }
`;
const TitleBox = styled.div`
  width: 400px;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 50px;
  position: absolute;
  font-family: poppins;
  z-index: 3;
  h3 {
    font-size: 15px;
    color: #888;
  }
  a {
    color: #1d1d1f;
    font-size: 28px;
    font-weight: 500;
    line-height: 1.14286;
  }
`;
const LinkBox = styled.div`
  padding-top: 10px;
  letter-spacing: -0.02rem;
`;
const Descption = styled.div`
  padding-top: 10px;
  font-size: 17px;
  line-height: 1.23536;
  font-weight: 400px;
`;
const ImgBox = styled.div`
  border-radius: 20px;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);
  transition: all 500ms;
  &:hover {
    transform: scale3d(1.01, 1.01, 1.01);
  }
`;
