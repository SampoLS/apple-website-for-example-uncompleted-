import styled from "styled-components";
import Slider from "react-slick";

import avatar from "../../assets/avatar.png";
import Title from "../../components/Title";
import CardProducts from "../../components/CardProducts";
import CardWithoutImg from "../../components/CardWithoutImg";
import { data } from "../../data/bannerData";
import { moduleData } from "../../data/cardData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/componentStyle.css";

const StorePage = (): JSX.Element => {
  const [moduleOne] = moduleData;
  const { titleData, cardData } = moduleOne;
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const multipleProdutsSettings = {
    infinite: false,
    speed: 800,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
  };
  const cardSliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "50px",
  };
  return (
    <Container>
      <Banner>
        <InnerBox>
          <Box>
            <Slider {...settings} className="positionCenter">
              <Info>
                Save on Mac or iPad for college with education pricing. And get
                AirPods.1 <a href="/">Shop now</a>
              </Info>
              <Info>
                Get 3% Daily Cash back at Apple with Apple Card. And pay for
                your Apple products over time, interest‑free when you choose to
                check out with Apple Card Monthly Installments.*{" "}
                <a href="/">Learn more</a>
              </Info>
            </Slider>
          </Box>
        </InnerBox>
      </Banner>
      <ShopContainer>
        <DivBox>
          <InfoBox>
            <h1>Store.</h1>
            <div>The best way to buy the products you love.</div>
          </InfoBox>
        </DivBox>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <HelpBox>
            <Avatar>
              <img src={avatar} alt="avatar" />
            </Avatar>
            <ContentBox>
              <span>Need shopping help?</span>
              <a href="/">Ask a Specialist</a>
            </ContentBox>
          </HelpBox>
          <HelpBox>
            <Avatar>
              <img src={avatar} alt="avatar" />
            </Avatar>
            <ContentBox>
              <span>Visit an Apple Store</span>
              <a href="/">Find one near you</a>
            </ContentBox>
          </HelpBox>
        </div>
      </ShopContainer>
      <Products>
        <Caresoule {...multipleProdutsSettings}>
          {data.map((item) => {
            const { id, imgUrl, text } = item!;
            return (
              <Content key={id}>
                <img src={imgUrl} alt="mac" />
                <h6>{text}</h6>
              </Content>
            );
          })}
        </Caresoule>
      </Products>
      <Module>
        <Title titleData={titleData} />
        <CardSlider {...cardSliderSettings}>
          {cardData.map((item) => {
            const { id, title, imgUrl, desc } = item;
            return (
              <section key={id}>
                {imgUrl ? (
                  <CardProducts cardData={item} />
                ) : (
                  <CardWithoutImg data={{ title, desc }} />
                )}
              </section>
            );
          })}
        </CardSlider>
      </Module>
    </Container>
  );
};
export default StorePage;

const Container = styled.main`
  overflow: hidden;
`;
const Banner = styled.section`
  display: flex;
  align-items: center;
  text-align: center;
  background: #fff;
  height: 70px;
  box-shadow: 0 1px 5px #eee;
`;
const Info = styled.h5`
  font-size: 14px;
  padding: 0 45px;
  font-weight: 600;
  a {
    color: #06c;
  }
`;
const InnerBox = styled.div`
  margin: 0 auto;
  width: 70%;
`;
const Box = styled.div`
  width: 95%;
  margin: 0 auto;
`;
const ShopContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 70%;
  height: 250px;
  margin: 0 auto;
`;
const DivBox = styled.div`
  flex: 65%;
  display: flex;
  align-items: center;
`;
const InfoBox = styled.div`
  h1,
  div {
    display: inline;
    font-size: 40px;
    font-weight: 600;
    font-family: poppins;
  }
  div {
    color: #6e6e73;
  }
`;
const HelpBox = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  span,
  a {
    font-size: 14px;
    font-weight: bold;
  }
  a {
    color: #06c;
  }
`;
const Products = styled.section`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  position: relative;
  padding-bottom: 62px;
`;
const Caresoule = styled(Slider)`
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 50px;
  button {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    color: #fff;
  }
  .slick-arrow.slick-prev {
    position: absoulte;
    left: 0px;
    display: none !important;
    background: rgb(216 216 216 / 35%);
  }
  .slick-arrow.slick-next {
    position: absoulte;
    right: 0px;
    display: none !important;
    background: rgb(216 216 216 / 35%);
  }
  &:hover .slick-arrow.slick-prev,
  &:hover .slick-arrow.slick-next {
    display: block !important;
  }
  .slick-list {
    margin-left: 140px;
    width: 100%;
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
  section {
    width: 100px !important;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
  }
`;
const Content = styled.section`
  h6 {
    font-weight: 500;
    padding-top: 8px;
  }
`;
const Module = styled.section`
  width: 100%;
  height: 500px;
  padding-left: 200px;
  margin-bottom: 160px;
`;
const CardSlider = styled(Slider)`
  .slick-arrow {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #b8b8b885;
    position: absolute;
    z-index: 1;
    transition: all 300ms linear;
    opacity: 0;
  }
  &:hover .slick-arrow {
    opacity: 1;
  }
  .slick-arrow.slick-next {
    right: 0;
    top: 250px;
  }
  .slick-arrow.slick-prev {
    left: -200px;
    top: 250px;
  }
  .slick-list {
    overflow: visible;
    .slick-track {
      display: flex;
      justify-content: space-between;
      .slick-slide {
        display: flex;
        justify-content: center;
        margin-right: 40px;
      }
    }
  }
`;
