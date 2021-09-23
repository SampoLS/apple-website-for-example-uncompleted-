import mac from "../assets/store-mac.png";
import iphone from "../assets/store-iphone.png";
import iPad from "../assets/store-ipad.png";
import appleWatch from "../assets/store-watch.png";
import airPods from "../assets/store-airpods.png";
import airTag from "../assets/store-airtags.png";
import appleTv from "../assets/store-appletv.png";
import homePodMini from "../assets/store-homepod.png";
import accessories from "../assets/store-accessories.png";

type Data = {
  id?: number;
  imgUrl?: string;
  text?: string;
}[];
export const data: Data = [
  {
    id: 1,
    imgUrl: mac,
    text: "Mac",
  },
  {
    id: 2,
    imgUrl: iphone,
    text: "iphone",
  },
  {
    id: 3,
    imgUrl: iPad,
    text: "iPad",
  },
  {
    id: 4,
    imgUrl: appleWatch,
    text: "Apple Watch",
  },
  {
    id: 5,
    imgUrl: airPods,
    text: "AirPods",
  },
  {
    id: 6,
    imgUrl: airTag,
    text: "AirTag",
  },
  {
    id: 7,
    imgUrl: appleTv,
    text: "Apple Tv",
  },
  {
    id: 8,
    imgUrl: homePodMini,
    text: "HomePod mini",
  },
  {
    id: 9,
    imgUrl: accessories,
    text: "Accessories",
  },
];
