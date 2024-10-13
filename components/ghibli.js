import { Box, Image } from "@chakra-ui/react";

const Ghibli = () => {
  return (
    <Box display={{ md: "flex" }} justifyContent="center">
      <Image
        src="/images/1345658.png"
        width={[560, 566, 585]}
        height={230}
        margin="auto"
        textAlign="center"
      />
    </Box>
  );
};

export default Ghibli;
