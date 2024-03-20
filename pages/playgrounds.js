import Layout from "../components/layouts/article";
import Ghibli from "../components/ghibli";
import { Container, Button, Spinner, Text } from "@chakra-ui/react";
import { TitlePlaygrounds } from "../components/playground";
import { Input } from "@chakra-ui/input";
import { useState } from "react";

const FetchingPlayground = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("https://dummyjson.com/products/1");
  const [error, setError] = useState(null);

  const fetchingData = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(url)
      if (!response.ok) {
        console.log("Oh it was error while fetch")
      }
      const data = await response.json()
      setResponse(data)
    } catch (error) {
      console.error("Error fetch data", error)
      setError("Oh it was error while fetch try again later...")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout title="FetchPlayground">
      <Ghibli />
      <Container>
        <TitlePlaygrounds>Fetching Playgrounds</TitlePlaygrounds>
        <div style={{ display: "flex" }}>
          <Input 
          placeholder="Enter ur url here" 
          mb={4}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          />
          <Button colorScheme="teal" ml={2} onClick={fetchingData}>
            {loading ? <Spinner color="white" size="sm"/> : "Fetch"}
          </Button>
        </div>
        <div className="mockup-code">
          {loading && <Spinner marginLeft={10}/>} 
          {error && <Text>{error}</Text>}
          {!loading && !error && (
            <pre data-prefix="~">
            <code>{JSON.stringify(response, null, 2)}</code>
          </pre>
          )}
        </div>
      </Container>
    </Layout>
  );
};

export default FetchingPlayground;
