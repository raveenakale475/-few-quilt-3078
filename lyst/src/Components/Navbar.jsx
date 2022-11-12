import {
  Flex,
  Box,
  Spacer,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Divider,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const logoNavigate = useNavigate();
  return (
    <>
      <Flex minWidth="max-content" alignItems="center" fontSize={"14px"}>
        <Spacer />
        <Box fontWeight={"bold"}>
          <Button background={"none"} _hover={{ cursor: "pointer" }}>
            CN-IN₹
          </Button>
        </Box>

        <Box>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              background={"none"}
            >
              Help
            </MenuButton>
            <MenuList>
              <MenuItem>Help Center</MenuItem>
              <Divider orientation="horizontal" />
              <MenuItem>Contact Us</MenuItem>
              <Divider orientation="horizontal" />
              <MenuItem>About Us</MenuItem>
              <Divider orientation="horizontal" />
              <MenuItem>Careers</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Button
          m={"2"}
          mr={"5"}
          color={"white"}
          backgroundColor={"black"}
          p={"-0.9"}
          fontSize={"14"}
          onClick={() => navigate("/Signup")}
        >
          Sign Up Or Log In
        </Button>
      </Flex>

      <Flex m={"auto"} borderBottom={"1px solid black"}>
        <Box border={"0px solid green"} width={"150px"}>
          <Image
            src="https://pydata.org/static/uploads/sponsor_logos/LystLogo.png"
            alt={"lyst"}
            p={"5"}
            _hover={{ cursor: "pointer" }}
            onClick={() => logoNavigate("/")}
          />
        </Box>

        <Box border={"0px solid blue"} width={"100px"}>
          <Menu>
            <MenuButton
              fontWeight={""}
              textDecoration={"underline"}
              fontSize={"20"}
              mt={"5"}
              _hover={{ textDecoration: "none" }}
            >
              WOMEN
            </MenuButton>
            <MenuList m={"5"} ml={"0"}>
              <MenuItem>All clothing</MenuItem>
              <MenuItem>Beachwear and swimwear outfits</MenuItem>
              <MenuItem>Coats</MenuItem>
              <MenuItem>Dresses</MenuItem>
              <MenuItem>Hosiery</MenuItem>
              <MenuItem>Jackets</MenuItem>
              <MenuItem>Jeans</MenuItem>
              <MenuItem>Jumpsuits and rompers</MenuItem>
              <MenuItem>Sweaters and knitwear</MenuItem>
              <MenuItem>Lingerie</MenuItem>
              <MenuItem>Nightwear and sleepwear</MenuItem>
              <MenuItem>+ More</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box border={"0px solid yellow"} width={"100px"}>
          <Menu>
            <MenuButton
              fontWeight={""}
              fontSize={"20"}
              mt={"5"}
              _hover={{ textDecoration: "underline" }}
            >
              MEN
            </MenuButton>
            <MenuList m={"5"} ml={"-10"}>
              <MenuItem>All clothing</MenuItem>
              <MenuItem>Beachwear and swimwear outfits</MenuItem>
              <MenuItem>Coats</MenuItem>
              <MenuItem>Dresses</MenuItem>
              <MenuItem>Hosiery</MenuItem>
              <MenuItem>Jackets</MenuItem>
              <MenuItem>Jeans</MenuItem>
              <MenuItem>Jumpsuits and rompers</MenuItem>
              <MenuItem>Sweaters and knitwear</MenuItem>
              <MenuItem>Lingerie</MenuItem>
              <MenuItem>Nightwear and sleepwear</MenuItem>
              <MenuItem>+ More</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box border={"0px solid pink"} width={"1070px"} mt={"1"}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input type="text" placeholder="Search" height={"50"} />
          </InputGroup>
        </Box>
      </Flex>
    </>
  );
}
export default Navbar;
