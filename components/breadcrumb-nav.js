import NextLink from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import ThemeToggleButton from "./theme-toggle-button";

const BreadcrumbNav = () => {
  return (
    <Flex 
      alignItems="center"
      justifyContent="space-between"
      width={["70%", "75%", "95%"]}
      maxWidth="600px"
      p={2}
    >
      <Breadcrumb separator="/">
        <BreadcrumbItem>
          <BreadcrumbLink as={NextLink} href='/'>
            <Text fontWeight="bold">Blog</Text>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={NextLink} href='/progress-report'>
            <Text fontWeight="bold">Progress-Reports</Text>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={NextLink} href='/about'>
            <Text fontWeight="bold">About</Text>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box>
        <ThemeToggleButton />
      </Box>
    </Flex>
  );
};

export default BreadcrumbNav;