import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Textarea, Button, useToast } from "@chakra-ui/react";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to a server
    toast({
      title: "Job posted.",
      description: "Your job listing has been posted successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Clear the form
    setTitle("");
    setCompany("");
    setLocation("");
    setDescription("");
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Post a Job
        </Heading>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4}>
            <FormControl id="title" isRequired>
              <FormLabel>Job Title</FormLabel>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl id="company" isRequired>
              <FormLabel>Company</FormLabel>
              <Input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </FormControl>
            <FormControl id="location" isRequired>
              <FormLabel>Location</FormLabel>
              <Input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </FormControl>
            <FormControl id="description" isRequired>
              <FormLabel>Job Description</FormLabel>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
            <Button colorScheme="teal" type="submit" width="full">
              Post Job
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default PostJob;