import { Container, Badge, Link, List, ListItem, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import Ghibli from "../../components/ghibli";

const Work = () => {
  return (
    <Layout title="Dapow Crypto">
      <Ghibli />
      <Container mt={4}>
        <Title>
          Dapow Crypto <Badge>2023</Badge>
        </Title>
        <Paragraph>
          Discover CryptoTrack: Your All-in-One Platform for Real-Time Crypto
          Updates and Community Engagement. Stay informed with up-to-the-minute
          cryptocurrency prices and breaking news, all conveniently displayed in
          one place. Customize your experience by adding favorite coins and join
          our active community forum to discuss trends, strategies, and more
          with fellow enthusiasts. Experience the future of crypto tracking with
          CryptoTrack.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://dapow-crypto.web.app/">
              https://dapow-crypto.web.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Only Web not supported at Mobile</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Vue Js, Express Js, Web Socket, Axios, Bootstrap, Node Js</span>
          </ListItem>
        </List>
        <Box mt={3}>
          <WorkImage src="/images/crypto-dapow-1.png" alt="CryptoDapow" />
          <WorkImage src="/images/crypto-dapow-2.png" alt="CryptoDapow" />
          <WorkImage src="/images/crypto-dapow-3.png" alt="CryptoDapow" />
          <WorkImage src="/images/crypto-dapow-4.png" alt="CryptoDapow" />
          <WorkImage src="/images/crypto-dapow-5.png" alt="CryptoDapow" />
          <WorkImage src="/images/crypto-dapow-6.png" alt="CryptoDapow" />
        </Box>
      </Container>
    </Layout>
  );
};

export default Work;
