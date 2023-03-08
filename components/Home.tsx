import { Box, Button, Spacer, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import BGImage from "../assets/BGImage.jpg";
import IconTwo from "../assets/IconTwo.svg";
import IconThree from "../assets/IconThree.svg";
import IconOne from "../assets/IconOne.svg";
import IconFour from "../assets/IconFour.svg";
import IconFive from "../assets/IconFive.svg";
import IconSix from "../assets/IconSix.svg";
import IconSeven from "../assets/IconSeven.svg";

import { Yellowtail } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const yellow_tail = Yellowtail({ weight: "400", subsets: ["latin"] });

function Home() {
  return (
    <Box position={"relative"} overflow="hidden">
      <Box minHeight={"898px"} pos="relative">
        <Image
          style={{
            position: "absolute",
            width: "100%",
          }}
          src={BGImage}
          alt=""
        />
        <Image
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
          src={IconTwo}
          alt=""
        />
        <Image
          style={{
            position: "absolute",
            top: "190px",
            left: "140px",
          }}
          src={IconThree}
          alt=""
        />
        <Image
          style={{
            position: "absolute",
            bottom: "200px",
            left: "25px",
          }}
          src={IconOne}
          alt=""
        />
        <Image
          style={{
            position: "absolute",
            top: "73px",
            left: "40%",
          }}
          src={IconFour}
          alt=""
        />
        <Image
          style={{
            position: "absolute",
            top: "25px",
            right: "160px",
          }}
          src={IconSix}
          alt=""
        />

        <Image
          style={{
            position: "absolute",
            top: "0px",
            right: "0px",
          }}
          src={IconSeven}
          alt=""
        />

        <Image
          style={{
            position: "absolute",
            bottom: "180px",
            right: "0px",
          }}
          src={IconFive}
          alt=""
        />
        <Stack pos={"absolute"} h="auto" maxW="510px" left="280px" top="240px">
          <Text
            fontSize="36px"
            className={yellow_tail.className}
            color="themer.mtwo"
          >
            100% Natural Food
          </Text>
          <Text
            lineHeight="82px"
            color="themer.mone"
            fontWeight="800"
            fontSize="70px"
            paddingBottom={"23px"}
          >
            Choose the best healthier way of life
          </Text>
          <Button
            width="220px"
            fontSize="20px"
            height="79px"
            fontWeight="700"
            color="themer.mone"
            bgColor="themer.mthree"
            borderRadius="16px"
          >
            Explore Now
            <span>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                fontSize="20px"
                color="themer.mone"
                style={{
                  marginLeft: "15px",
                }}
              />
            </span>
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Home;
