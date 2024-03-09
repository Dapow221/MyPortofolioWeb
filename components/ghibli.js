import { Box, Image } from "@chakra-ui/react";

const Ghibli = () => {
  return (
    <Box display={{ md: "flex" }} justifyContent="center">
      <Image
        src="/images/ghibli.png"
        width={260}
        height={180}
        margin="auto"
        textAlign="center"
      />
    </Box>
  );
};

export default Ghibli;
