import { useParams, useNavigate } from "react-router-dom";
import { Container, Heading, Button, VStack, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";

const DeletePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");

  useEffect(() => {
    // Fetch the post by ID and handle deletion logic here
    // For now, we'll just log the ID
    console.log("Deleting post with ID:", id);
  }, [id]);

  const handleDelete = () => {
    // Perform the delete operation here
    console.log("Post deleted:", id);
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={8} bg={bg} color={color}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">Delete Post</Heading>
        <Text>Are you sure you want to delete this post?</Text>
        <Button colorScheme="red" size="lg" onClick={handleDelete}>Delete</Button>
        <Button colorScheme="gray" size="lg" onClick={() => navigate("/")}>Cancel</Button>
      </VStack>
    </Container>
  );
};

export default DeletePost;