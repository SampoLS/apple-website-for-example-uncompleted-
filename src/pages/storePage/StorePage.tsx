import Slider from "react-slick";

import avatar from "../../assets/avatar.png";
import Title from "../../components/Title";
import CardProducts from "../../components/CardProducts";
import CardWithoutImg from "../../components/CardWithoutImg";
import { data } from "../../data/bannerData";
import { moduleData } from "../../data/cardData";
import {
  Container,
  Banner,
  InnerBox,
  Box,
  Info,
  ShopContainer,
  DivBox,
  InfoBox,
  HelpBox,
  Avatar,
  ContentBox,
  Products,
  Caresoule,
  Content,
  Module,
  CardSlider,
} from "./storePageStyle";

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
