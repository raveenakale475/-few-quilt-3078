import Middle from "./Middle";
import { Flex } from "@chakra-ui/react";

export const firstSlide = [
  {
    content: "WHAT TO WISHLIST NOW",
    imgsrc:
      "https://cdna.lystit.com/cms/5_C90_EA_3_D_C641_4_C59_AEE_7_729_E7036_BCF_1_ea93f2a099.PNG",
  },
  {
    content: "ahead of the trend",
    imgsrc:
      "https://cdna.lystit.com/cms/791d5cce_14ec_4b7a_b6df_6cb35f1abf9c_0e299e3b12.png",
  },
  {
    content: "Best of boots",
    imgsrc:
      "https://cdna.lystit.com/cms/774684bb_f807_4fa2_b802_507eb6c226a0_92a34933f0.png",
  },
  {
    content: "if you only buy one thing",
    imgsrc:
      "https://cdna.lystit.com/cms/660e7499_cd9e_4185_ab62_d391ade33995_ba91f9c180.png",
  },
  {
    content: "strategic buys",
    imgsrc:
      "https://cdna.lystit.com/cms/b64f1667_734e_4565_ada8_f8fd0a6fefc9_0fac2b73d5.png",
  },
];

export const secondSlide = [
  {
    content: "ferragamo ss23 preview",
    imgsrc:
      "https://cdna.lystit.com/cms/Q4_Nov_Lyst_Homepage_Top_Lyst_Banner_600x600_US_8d5732b497.jpg",
  },
  {
    content: "shop the latest fear of god ",
    imgsrc: "https://cdna.lystit.com/cms/ssense_600_x_600_woman_a1d11da9ce.jpg",
  },
  {
    content: "boden up to 15%off+free",
    imgsrc: "https://cdna.lystit.com/cms/600x600_Boden_7_Nov_6e206863ac.jpg",
  },
  {
    content: "sabrina zeng | sustainable",
    imgsrc:
      "https://cdna.lystit.com/cms/SZ_LYST_Hammock_Camel_1_bc0dd8c317.jpg",
  },
  {
    content: "voted one of best stores in the",
    imgsrc:
      "https://cdna.lystit.com/cms/madison_beverly_hills_lyst_63f59bd7db.jpg",
  },
];

export function slideOne() {
  return (
    <Flex>
      {firstSlide.map((el) => (
        <Middle content={el.content} imgsrc={el.imgsrc} />
      ))}
    </Flex>
  );
}

export function slideTwo() {
  return (
    <Flex>
      {secondSlide.map((el) => (
        <Middle content={el.content} imgsrc={el.imgsrc} />
      ))}
    </Flex>
  );
}
