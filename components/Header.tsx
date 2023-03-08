import React from "react";
import Logo from "../assets/Logo.svg";
import Image from "next/image";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Circle,
  InputLeftElement,
} from "@chakra-ui/react";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { SearchIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faSearch,
  faAmbulance,
  faAnchor,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

function Header() {
  return (
    <div className={roboto.className}>
      <Stack align="center" flexDirection={"row"} px={"3%"} py={"3%"}>
        <Flex align="center">
          <Image src={Logo} alt="" />
          <Heading pl={"8px"} color="themer.mone">
            Organick
          </Heading>
        </Flex>
        <Spacer />
        <Flex
          color={"themer.mone"}
          gap={"35px"}
          fontSize={"20px"}
          fontWeight={"700"}
        >
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Pages </Link>
          <Link href="/">Shop</Link>
          <Link href="/">Projects</Link>
          <Link href="/">News</Link>
        </Flex>
        <Spacer />
        <Flex>
          <InputGroup
            bg="themer.mfive"
            h="66px"
            width={"376px"}
            borderRadius="36px"
          >
            <Input variant={"unstyled"} pl={"30px"} />
            <InputRightElement mt={"13px"} mr="17px">
              <Circle minWidth={"56px"} minHeight="56px" bg="themer.mtwo">
                <SearchIcon color="themer.msix" width={"21px"} height="21px" />
              </Circle>
            </InputRightElement>
          </InputGroup>
          <Box
            borderWidth={"1px"}
            borderColor="themer.mfive"
            h={"66px"}
            w="159px"
            ml={"18px"}
            borderRadius="36px"
            display={"flex"}
            placeItems="center"
          >
            <Box
              width={"56px"}
              height="56px"
              borderRadius={"full"}
              bg="themer.mone"
              mt={"4px"}
              ml="4px"
              placeItems={"center"}
              display="flex"
              placeContent={"center"}
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                fontSize={"21px"}
                color="white"
              />
            </Box>
            <Text
              fontWeight={"600"}
              fontSize="18px"
              ml={"12px"}
              color={"themer.mone"}
            >
              Cart (0)
            </Text>
          </Box>
        </Flex>
      </Stack>
    </div>
  );
}

export default Header;
