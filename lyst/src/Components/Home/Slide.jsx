import { textDecoration } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import { mobile } from "./responsive";

const Wrapper = styled.div``;
const Slider = styled.div`
  display: flex;
  height: ${(props) => (props.type === "sec-slide" ? 350 : 300)}px;
  overflow-x: auto;
  scrollbar-width: none; // for firefox
  -ms-overflow-style: none; //for Edge
  &::-webkit-scrollbar {
    display: none;
  }
  border-bottom: 1px solid black;
  ${mobile({
    height: "190px",
  })}
`;
const Item = styled.div`
  min-width: ${(props) => (props.type === "sec" ? 436 : 400)}px;
  height: 100%;
  display: flex;
  border-left: 1px solid black;
  position: ${(props) => (props.type === "sec" ? "relative" : "none")};
  ${mobile({ minWidth: "228px" })}
`;
const ItemTitle = styled.div`
  width: 100px;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h3`
  position: absolute;
  transform: rotate(-90deg);
  transform-origin: bottom left;
  left: 100%;
  bottom: 0px;
  padding: 5px;
  width: 300px;
  color: black;
  font-size: 23px;
  font-weight: bold;
  text-transform: uppercase;
`;
const Image = styled.img`
  width: 300px;
  height: 100%;
`;
const Para = styled.p`
  font-size: 70px;
  margin: 30px;
  font-weight: bold;
  line-height: 0.8;
  letter-spacing: -2px;
  ${mobile({ fontSize: "32px", margin: "5px" })}
`;
const SecTitle = styled.h4`
  font-size: 22px;
  margin: 30px 0 0 30px;
  ${mobile({
    fontSize: "16px",
    margin: "5px 0 0 5px",
  })}
`;
const SecImage = styled.img`
  max-width: 100%;
  border: 0px;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 363px;
  height: 262px;
  ${mobile({
    width: "196px",
    height: "136px",
  })}
`;

const Slide = () => {
  return (
    <>
      <Wrapper>
        <Slider style={{ borderTop: "1px solid black" }}>
          <Item>
            <ItemTitle>
              <Title>WHAT TO WISHLIST NOW</Title>
            </ItemTitle>
            <Image
              src="https://cdna.lystit.com/cms/5_C90_EA_3_D_C641_4_C59_AEE_7_729_E7036_BCF_1_ea93f2a099.PNG"
              alt="WHAT TO WISHLIST NOW"
            />
          </Item>

          <Item>
            <ItemTitle>
              <Title>AHEAD OF THE TREND</Title>
            </ItemTitle>
            <Image
              src="https://cdna.lystit.com/cms/791d5cce_14ec_4b7a_b6df_6cb35f1abf9c_0e299e3b12.png"
              alt="AHEAD OF THE TREND"
            />
          </Item>

          <Item>
            <ItemTitle>
              <Title>BEST OF BOOTS</Title>
            </ItemTitle>
            <Image
              src="https://cdna.lystit.com/cms/774684bb_f807_4fa2_b802_507eb6c226a0_92a34933f0.png"
              alt="BEST OF BOOTS"
            />
          </Item>

          <Item>
            <ItemTitle>
              <Title>IF YOU ONLY BUY ONE THING</Title>
            </ItemTitle>
            <Image
              src="https://cdna.lystit.com/cms/660e7499_cd9e_4185_ab62_d391ade33995_ba91f9c180.png"
              alt="IF YOU ONLY BUY ONE THING"
            />
          </Item>

          <Item>
            <ItemTitle>
              <Title>STRATEGIC BUYS</Title>
            </ItemTitle>
            <Image
              src="https://cdna.lystit.com/cms/b64f1667_734e_4565_ada8_f8fd0a6fefc9_0fac2b73d5.png"
              alt="STRATEGIC BUYS"
            />
          </Item>
        </Slider>
        <Slider>
          <Item>
            <ItemTitle>
              <Title>FERRAGAMO SS23 PREVIEW</Title>
            </ItemTitle>
            <Image
              src="https://cdna.lystit.com/cms/Q4_Nov_Lyst_Homepage_Top_Lyst_Banner_600x600_US_8d5732b497.jpg"
              alt="FERRAGAMO SS23 PREVIEW"
            />
          </Item>

          <Item>
            <ItemTitle>
              <Title>SHOP THE LATEST FEAR OF GOD ESSENTIALS AT ESSENSSE</Title>
            </ItemTitle>
            <Image
              src="https://cdna.lystit.com/cms/ssense_600_x_600_woman_a1d11da9ce.jpg"
              alt="MYEA BAG"
            />
          </Item>

          <Item>
            <ItemTitle>
              <Title>
                BODEN UP TO 15%OFF+FREE SHIPPING WHEN YOU SPEND $49 WITH CODE
                F2L9
              </Title>
            </ItemTitle>
            <Image
              src="https://cdna.lystit.com/cms/600x600_Boden_7_Nov_6e206863ac.jpg"
              alt="BODEN UP TO 15%OFF+FREE SHIPPING WHEN YOU SPEND $49 WITH CODE F2L9"
            />
          </Item>

          <Item>
            <ItemTitle>
              <Title>SABRINA ZENG | SUSTAINABLE DESIGNER LEATHER GOODS</Title>
            </ItemTitle>
            <Image
              src="https://cdna.lystit.com/cms/SZ_LYST_Hammock_Camel_1_bc0dd8c317.jpg"
              alt="SABRINA ZENG"
            />
          </Item>

          <Item>
            <ItemTitle>
              <Title>VOTED ONE OF BEST STORES IN THE WORLD VOUGEITALIA</Title>
            </ItemTitle>
            <Image
              src="https://cdna.lystit.com/cms/madison_beverly_hills_lyst_63f59bd7db.jpg"
              alt="VOUGEITALIA"
            />
          </Item>
        </Slider>
      </Wrapper>
      <Wrapper style={{ marginTop: "5%" }}>
        <Slider type="sec-slide" style={{ borderTop: "1px solid black" }}>
          <Item
            type="sec"
            style={{ backgroundColor: "#f5f4f2", cursor: "e-resize" }}
          >
            <Para>BREAKOUT BRANDS</Para>
          </Item>
          <Item type="sec">
            <SecTitle>PATOU</SecTitle>
            <SecImage
              src="https://cdna.lystit.com/cms/My_Post_81_76121ffa01.jpg"
              alt="Patou"
            />
          </Item>
          <Item type="sec">
            <SecTitle>GUCCI</SecTitle>
            <SecImage
              src="https://cdna.lystit.com/cms/designer_rail_gucci_eca9e74796.jpg"
              alt="GUCCI"
            />
          </Item>
          <Item type="sec">
            <SecTitle>SAINT LAURENT</SecTitle>
            <SecImage
              src="https://cdna.lystit.com/cms/designer_rail_saint_laurent_2031eb80f7.jpeg"
              alt="SAINT LAURENT"
            />
          </Item>
          <Item type="sec">
            <SecTitle>OFF-WHITE C/O VIRGIL ABLOH</SecTitle>
            <SecImage
              src="https://cdna.lystit.com/cms/designer_rail_off_white_co_virgil_abloh_d8c6b37a9f.jpeg"
              alt="VIRGIL ABLOH"
            />
          </Item>
          <Item type="sec">
            <SecTitle>BALENCIAGA</SecTitle>
            <SecImage
              src="https://cdna.lystit.com/cms/designer_rail_balenciaga_215cbc0fe0.jpeg"
              alt="BALENCIAGA"
            />
          </Item>
          <Item type="sec">
            <SecTitle>NIKE</SecTitle>
            <SecImage
              src="https://cdna.lystit.com/cms/designer_rail_nike_c3045162ba.png"
              alt="NIKE"
            />
          </Item>
          <Item type="sec">
            <SecTitle>DOLCE & GABBANA</SecTitle>
            <SecImage
              src="https://cdna.lystit.com/cms/designer_rail_dolce_gabbana_bcb7049bb0.jpeg"
              alt="DOLCE & GABBANA"
            />
          </Item>
          <Item type="sec">
            <SecTitle>MONOCLER</SecTitle>
            <SecImage
              src="https://cdna.lystit.com/cms/designer_rail_moncler_bcdcdc131d.jpeg"
              alt="MONOCLER"
            />
          </Item>
          <Item type="sec">
            <SecTitle>VALENTINO</SecTitle>
            <SecImage
              src="https://cdna.lystit.com/cms/designer_rail_valentino_421c18fab0.jpeg"
              alt="VALENTINO"
            />
          </Item>
        </Slider>
        <Slider type="sec-slide">
          <Item type="sec">
            <SecTitle>ETON SHIRTS</SecTitle>
            <SecImage
              src="https://cdna.lystit.com/cms/eton_sweden_shirt_da4fff6982.jpg"
              alt="ETON SHIRTS"
            />
          </Item>
          <Item type="sec">
            <SecTitle>GALVAN LONDON DRESSES</SecTitle>
            <SecImage
              src="https://cdna.lystit.com/cms/galvan_dress_cb31d2b319.jpg"
              alt="GALVAN LONDON DRESSES"
            />
          </Item>
          <Item
            type="sec"
            style={{ backgroundColor: "#f5f4f2", cursor: "e-resize" }}
          >
            <Para>TRENDING NOW</Para>
          </Item>
          <Item type="sec">
            <SecTitle>ROBERTA ROLLER RABBIT NIGHTWEAR AND SLEEPWEAR</SecTitle>
            <SecImage
              src="https://cdna.lystit.com/cms/roberta_roller_rabbit_480eb63ae6.jpg"
              alt="ROBERTA ROLLER"
            />
          </Item>
          <Item type="sec">
            <SecTitle>RHUDE T-SHIRTS</SecTitle>
            <SecImage
              src="https://cdna.lystit.com/cms/rhude_shirt_c6bc886e07.jpg"
              alt="RHUDE"
            />
          </Item>
          <Item type="sec">
            <SecTitle>A BATHING APE JACKETS</SecTitle>
            <SecImage
              src="https://cdna.lystit.com/cms/a_bathing_ape_jacket_c40f13e02f.jpg"
              alt="A BATHING APE JACKET"
            />
          </Item>
          <Item type="sec">
            <SecTitle>JOHNNY WAS BEACHWEAR AND SWIMWEAR OUTFITS</SecTitle>
            <SecImage
              src="https://cdna.lystit.com/cms/johnny_was_beachwear_812a36ae2c.jpg"
              alt="JOHNNY WAS BEACHWEAR AND SWIMWEAR OUTFITS"
            />
          </Item>
          <Item type="sec">
            <SecTitle>CASABLANCA T-SHIRTS</SecTitle>
            <SecImage
              src="https://cdna.lystit.com/cms/casablanca_shirt_b83fb98040.jpg"
              alt="CASABLANCA T-shirts"
            />
          </Item>
        </Slider>
        <Slider type="sec-slide">
          <Item type="sec">
            <SecTitle>BONOBOS SHORTS</SecTitle>
            <SecImage
              src="https://cdna.lystit.com/cms/bonobos_shorts_6a3e83ea91.jpg"
              alt="BONOBOS SHORTS"
            />
          </Item>
          <Item
            type="sec"
            style={{ backgroundColor: "#f5f4f2", cursor: "e-resize" }}
          >
            <Para>HOT RIGHT NOW</Para>
          </Item>
          <Item type="sec">
            <SecTitle>BALENCIAGA BEACHWEAR AND SWIMWEAR OUTFITS</SecTitle>
            <SecImage
              src="https://cdna.lystit.com/cms/balenciaga_swimwear_a06622c701.jpg"
              alt="BALENCIAGA BEACHWEAR AND SWIMWEAR OUTFITS"
            />
          </Item>
          <Item type="sec">
            <SecTitle>PANDORA BRACELETS</SecTitle>
            <SecImage
              src="https://cdna.lystit.com/cms/pandora_bracelets_1e97a9f038.jpg"
              alt="PANDORA BRACELETS"
            />
          </Item>
          <Item type="sec">
            <SecTitle>LANVIN T-SHIRTS</SecTitle>
            <SecImage
              src="https://cdna.lystit.com/cms/lanvin_shirt_8ae9c5a0a3.jpg"
              alt="LANVIN T-SHIRTS"
            />
          </Item>
          <Item type="sec">
            <SecTitle>MAISHON MIHARA YASUHIRO SNEAKERS</SecTitle>
            <SecImage
              src="https://cdna.lystit.com/cms/maison_mihara_shoes_4f566934fb.jpg"
              alt="MAISHON MIHARA YASUHIRO SNEAKERS"
            />
          </Item>
          <Item type="sec">
            <SecTitle>CHIMI SUNGLASSES</SecTitle>
            <SecImage
              src="https://cdna.lystit.com/cms/chimi_sunglasses_1629b146e4.jpg"
              alt="CHIMI SUNGLASSES"
            />
          </Item>
          <Item type="sec">
            <SecTitle>BONOBOS PANTS, SLACKS AND CHINOS</SecTitle>
            <SecImage
              src="https://cdna.lystit.com/cms/bonobos_pants_ff66673693.jpg"
              alt="BONOBOS PANTS, SLACKS AND CHINOS"
            />
          </Item>
        </Slider>
      </Wrapper>
    </>
  );
};

export default Slide;
