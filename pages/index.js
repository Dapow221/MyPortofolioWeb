import {
  Box,
  Container,
  Link,
  Text,
  Heading
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";

const Homepage = () => {
  return (
    <Layout textAlign="left" footerAlign="center">
      <Container>
        <Box className="mt-4">
          <Section delay={0.1}>
          <Text as='b' fontSize='2xl'>Yo, I'm Dapoww!.</Text>
            <Text className="mt-4">
              Here, I zoom out on the daily grind, discuss the big picture, and share thoughts on various topics.
            </Text>
            <Text className="mt-4">
              I'll share the progress reports, current JS/Web3 projects, long-form posts, resources, and whatever catches my fancy.
            </Text>
          </Section>
        </Box>
      </Container>
    </Layout>
  );
};

export default Homepage;
