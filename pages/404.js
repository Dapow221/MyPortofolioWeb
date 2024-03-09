import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react";
import Ghibli from "../components/ghibli";

const NotFound = () => {
  return (
    <Container>
      <Ghibli />
      <Box mt={10}>
        <Heading as="h1">Not found</Heading>
        <Text>The page you&apos;re looking for was not found.</Text>
        <Divider my={6} />
        <Box my={6} align="center">
          <Button as={NextLink} href="/" colorScheme="teal">
            Return to home
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NotFound;
