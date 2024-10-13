import Head from "next/head";
import { Box, Container, Flex, Divider, useColorModeValue } from "@chakra-ui/react";
import Footer from "../footer";
import Ghibli from "../ghibli";
import BreadcrumbNav from "../breadcrumb-nav";

const Main = ({ children, router, textAlign = 'left', footerAlign = 'center' }) => {
  const dividerColor = useColorModeValue("black", "white");

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dapow - Homepage</title>
      </Head>
      <Container maxW="container.md" pt={9}>
        <Ghibli />
        <Flex justifyContent="center" my={2}>
          <BreadcrumbNav path={router.asPath} />
        </Flex>
        <Flex justifyContent="center">
          <Divider
            width={["50%", "98%", "79%"]}
            borderColor={dividerColor}
          />
        </Flex>
        <Box textAlign={textAlign} className="mr-10">
          {children}
        </Box>
        <Box textAlign={footerAlign}>
          <Footer />
        </Box>
      </Container>
    </Box>
  );
};

export default Main;