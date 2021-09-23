import iphone12 from "../assets/iphone_12.jpg";
import iphone12Pro from "../assets/iphone_12_pro.jpg";
import iphoneIpadPro from "../assets/hero_ipad_pro.jpg";
import iMac from "../assets/promo_imac.jpg";
import watch from "../assets/promo_watch.jpg";
import fitness from "../assets/tile.jpg";
import airPods from "../assets/promo_bts.jpg";
import card from "../assets/tile__ca.jpg";
import appleTv from "../assets/tile_stillwater.jpg";

type Params = {
  title?: string;
  subTitle?: string;
  priceInfo1?: string;
  priceInfo2?: string;
  imgPath?: string;
  theme?: { backgroundColor?: string; backgroundPosition?: string };
}[];
const iphone12Style = {
  backgroundColor: "#fbfbfd",
  backgroundPosition: "center -270px",
};
const iphone12ProStyle = {
  backgroundColor: "#000",
  fontColor: "#fff",
  backgroundPosition: "center -270px",
};
const iPadProStyle = {
  backgroundColor: "#000",
  fontColor: "#fff",
  backgroundPosition: "center -260px",
};
const iMacStyle = {
  backgroundColor: "#fbfbfd",
  h2fontSize: "38px",
  h3fontSize: "20px",
  backgroundPosition: "center -200px",
};
const watchStyle = {
  backgroundColor: "#000",
  backgroundPosition: "center -200px",
  fontColor: "#fff",
  h2fontSize: "38px",
  h3fontSize: "20px",
};
const fitnessStyle = {
  backgroundColor: "#fbfbfd",
  backgroundPosition: "center 40px",
  h2fontSize: "38px",
  h3fontSize: "20px",
};
const airPodsStyle = {
  backgroundColor: "linear-gradient(to right, #cce4e2d1, #a8dbf4)",
  backgroundPosition: "center -200px",
  h2fontSize: "38px",
  h3fontSize: "20px",
};
const cardStyle = {
  backgroundColor: "#fbfbfd",
  backgroundPosition: "center -200px",
  h2fontSize: "38px",
  h3fontSize: "20px",
};
const appleTvStyle = {
  backgroundColor: "#fbfbfd",
  backgroundPosition: "center 0px",
  h2fontSize: "38px",
  h3fontSize: "20px",
};
export const params: Params = [
  {
    title: "iPhone 12",
    subTitle: "Blast past fast",
    priceInfo1: "From $29.12/mo. for 24 mo. or $699 before trade‑in",
    priceInfo2: "Buy directly from Apple with special carrier offers",
    imgPath: iphone12,
    theme: iphone12Style,
  },
  {
    title: "iPhone pro",
    subTitle: "It's a leap year",
    priceInfo1: "From $41.62/mo. for 24 mo. or $999 before trade‑in",
    priceInfo2: "Buy directly from Apple with special carrier offers",
    imgPath: iphone12Pro,
    theme: iphone12ProStyle,
  },
  {
    title: "ipad Pro",
    subTitle: "Supercharged by the Apple M1 chip.",
    imgPath: iphoneIpadPro,
    theme: iPadProStyle,
  },
  {
    title: "iMac",
    subTitle: "Say Hello",
    imgPath: iMac,
    theme: iMacStyle,
  },
  {
    title: `Watch`,
    subTitle: "The future of health is on your wrist",
    imgPath: watch,
    theme: watchStyle,
  },
  {
    title: "Fitness+",
    subTitle:
      "The first fitness service powered by Apple Watch. Try it for 1 month free.",
    imgPath: fitness,
    theme: fitnessStyle,
  },
  {
    title: "Buy a Mac or iPad for college. Get AirPods",
    subTitle: "Save with education pricing",
    imgPath: airPods,
    theme: airPodsStyle,
  },
  {
    title: "Card",
    subTitle: "Get up to 3% Daily Cash back with every purchase.",
    imgPath: card,
    theme: cardStyle,
  },
  {
    imgPath: appleTv,
    theme: appleTvStyle,
  },
];
