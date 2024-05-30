import { useState } from "react";
import { Container, Heading, Input, Textarea, Button, VStack, FormControl, FormLabel, Image } from "@chakra-ui/react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ title, content, image });
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Add New Post</Heading>
        <FormControl id="title" isRequired>
          <FormLabel>Title</FormLabel>
          <Input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Enter the title" 
          />
        </FormControl>
        <FormControl id="content" isRequired>
          <FormLabel>Content</FormLabel>
          <Textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            placeholder="Enter the content" 
            rows={6} 
          />
        </FormControl>
        <FormControl id="image">
          <FormLabel>Image</FormLabel>
          <Input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
          />
          {preview && <Image src={preview} alt="Image preview" boxSize="sm" mt={4} />}
        </FormControl>
        <Button colorScheme="teal" size="lg" type="submit">Submit</Button>
      </VStack>
    </Container>
  );
};

export default AddPost;