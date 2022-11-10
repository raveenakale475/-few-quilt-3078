import { Flex, Box, Image, Heading } from "@chakra-ui/react";

function Middle({ content, imgsrc }) {
  return (
    <Box
      border={"0.5px solid black"}
      width={"500px"}
      height={"368px"}
      pt={"50px"}
    >
      <Heading
        as="h6"
        textTransform={"uppercase"}
        fontSize={"15px"}
        
      >
        {content}
      </Heading>
      <Image src={imgsrc} height={"300px"} />
    </Box>
  );
}

export default Middle;
// transform={"rotate(90deg)"}
