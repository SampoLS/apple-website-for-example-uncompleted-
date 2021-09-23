import macOrPad from "../assets/store-card.jpg";
import iphone12 from "../assets/store-iphone.jpg";
import iphone12pro from "../assets/store-iphone12.jpg";
import iMac from "../assets/store-imac.jpg";

type ModuleData = {
  titleData: {
    titleHead: string;
    descption: string;
  };
  cardData: {
    id: number;
    altName: string;
    title: string;
    desc: string;
    text?: string;
    imgUrl?: string;
  }[];
}[];

export const moduleData: ModuleData = [
  {
    titleData: {
      titleHead: "The latest.",
      descption: "Take a look at what’s new",
    },
    cardData: [
      {
        id: 1,
        altName: "macOrPad",
        title: "back to college",
        text: "Buy a Mac or iPad for college. Get AirPods.",
        desc: "Save with education pricing.",
        imgUrl: macOrPad,
      },
      {
        id: 2,
        altName: "iphone",
        title: "HOT SUMMER ACCESSORIES",
        text: "Stick out.",
        desc: "Snap on a MagSafe case, wallet, or wireless charger. ",
        imgUrl: iphone12,
      },
      {
        id: 3,
        altName: "iphone",
        title: "IPHONE 12 AND IPHONE 12 MINI",
        text: "Blast past fast.",
        desc: "Save with education pricing.",
        imgUrl: iphone12pro,
      },
      {
        id: 4,
        altName: "macOrPad",
        title: "back to college",
        text: "Buy a Mac or iPad for college. Get AirPods.",
        desc: "Save with education pricing.",
        imgUrl: "",
      },
      {
        id: 5,
        altName: "macOrPad",
        title: "back to college",
        text: "Buy a Mac or iPad for college. Get AirPods.",
        desc: "Save with education pricing.",
        imgUrl: iMac,
      },
    ],
  },
];
