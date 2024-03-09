import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import CryptoDapow from "../public/images/crypto-dapow.png";
import Typescript from "../public/images/works/typescript.png";
import Layout from "../components/layouts/article";
import Ghibli from "../components/ghibli";

const Works = () => {
  return (
    <Layout>
      <Container>
        <Ghibli />
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="crypto-page"
              title="Dapow Crypto"
              thumbnail={CryptoDapow}
            >
              A crypto website realtime prices, build with Web Socket, Vue Js,
              Express Js and 3rd Party App to get realtime crypto prices.
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="typescript-api"
              title="Typescript Full Rest API"
              thumbnail={Typescript}
            >
              Restfull API with authorization and authentication
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
