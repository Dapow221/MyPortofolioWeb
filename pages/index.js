import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import Ghibli from "../components/ghibli";
import { BioSection, BioYear } from "../components/bio";
import { IoLogoGithub, IoLogoLinkedin   } from "react-icons/io5"

const Homepage = () => {
  return (
    <Layout>
      <Container>
        <Ghibli />
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          mt={3}
          align="center"
        >
          Hello, I&apos;m an Fullstack developer based in Indonesia!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Muhammad Daffa
            </Heading>
            <p>Digital Craftsman ( Trader / Fullstack Developer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/cat-love.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I am a fullstack developer from Indonesia, after graduating high
            school, I took the fullstack Javascript bootcamp at{" "}
            <Link
              as={NextLink}
              href="https://www.hacktiv8.com"
              passHref
              scroll={false}
            >
              Hacktiv8 Indonesia
            </Link>
            , apart from being a programmer i also have a strong interest on trading in
            the crypto market, some of the frameworks that i usually use are
            React Js, Framer Motion, React Native, Next Js, Vue Js, Express Js,
            MongoDb, PostgresSQL, GraphQL, etc.
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My portfolio
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2002</BioYear>
            Born in Pasuruan, Indonesia.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed High School at SMAN 1 Pandaan
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            <Link
              as={NextLink}
              href="https://job-portal-manual.s3.amazonaws.com/Certificate+-+Muhammad+Daffa+Salsabil.pdf"
              passHref
              scroll={false}
              target="_blank"
            >
              Certificated{" "}
            </Link> Fullstack Javascript Immersive at{" "}
            <Link
              as={NextLink}
              href="https://www.hacktiv8.com"
              passHref
              scroll={false}
              target="_blank"
            >
              Hacktiv8 Indonesia{" "}
            </Link>
            in November {" "}
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            My Interest
          </Heading>
          <Paragraph>
            Art, Music, Coding, Writing, Trading, Technologies, Crytocurrency,
            Cat, Culture Pop.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Find me on social media
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Dapow221" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>
                  @Dapow221
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/m-daffa-salsabil-915a911aa" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin}/>}>
                  Muhammad Daffa Salsabil
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Homepage;
