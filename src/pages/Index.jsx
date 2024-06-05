import { Container, Text, VStack, Box, Heading, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const jobListings = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    description: "We are looking for a skilled software engineer to join our team.",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Innovate Ltd.",
    location: "New York, NY",
    description: "Seeking an experienced product manager to lead our product team.",
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Design Studio",
    location: "Remote",
    description: "A creative UX designer needed for a fast-growing design studio.",
  },
];

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to a server
    toast({
      title: "Application submitted.",
      description: "Your application has been submitted successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Clear the form
    setName("");
    setEmail("");
    setResume(null);
    setCoverLetter("");
    onClose();
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Job Listings
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {jobListings.map((job) => (
            <Card key={job.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <CardHeader>
                <Heading as="h2" size="md">
                  {job.title}
                </Heading>
                <Text fontSize="sm" color="gray.500">
                  {job.company} - {job.location}
                </Text>
              </CardHeader>
              <CardBody>
                <Text>{job.description}</Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme="teal" variant="outline" onClick={onOpen}>
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Apply for Job</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="resume" isRequired>
                  <FormLabel>Resume</FormLabel>
                  <Input
                    type="file"
                    onChange={(e) => setResume(e.target.files[0])}
                  />
                </FormControl>
                <FormControl id="coverLetter" isRequired>
                  <FormLabel>Cover Letter</FormLabel>
                  <Textarea
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                  />
                </FormControl>
                <Button colorScheme="teal" type="submit" width="full">
                  Submit Application
                </Button>
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;