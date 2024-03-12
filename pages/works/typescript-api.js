import { Container, Badge, Link, List, ListItem, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import Ghibli from "../../components/ghibli";

const TypescriptWork = () => {
  return (
    <Layout>
      <Ghibli />
      <Container>
        <Title>
          Typescript API <Badge>2023</Badge>
        </Title>
        <Paragraph>
          There's a User API where you can access all information about users in
          the database, you can also use authentication and authorization to try
          log in and sign in out
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Url</Meta>
            <Link href=" https://github.com/Dapow221/Express-TypeScript-Node.js-MongoDb">
              https://github.com/Dapow221/Express-TypeScript-Node.js-MongoDb
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platfrom</Meta>
            <span>
              You can try this project with running in your localhost by visited
              my github url
            </span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Express Js, TypeScript, MongoDb, Node Js</span>
          </ListItem>
        </List>
        <Box mt={3}>
          <WorkImage src="/images/works/typescript.png" />
        </Box>
      </Container>
    </Layout>
  );
};

export default TypescriptWork;
