import { Box, Container, Heading, Text, VStack, SimpleGrid, Image } from '@chakra-ui/react'

function About() {
  return (
    <Container maxW="1200px" py={12}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" mb={8}>
          <Heading size="2xl" mb={4}>About Elite Tower</Heading>
          <Text fontSize="lg" color="gray.600">
            A Legacy of Luxury and Excellence
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <Image
              src="/images/about-1.jpg"
              alt="Elite Tower"
              borderRadius="lg"
              objectFit="cover"
              h="400px"
              w="100%"
            />
          </Box>
          <VStack align="start" spacing={4}>
            <Heading size="lg">Our Story</Heading>
            <Text>
              Founded in 1995, Elite Tower has been a symbol of luxury and comfort in the hospitality industry. 
              Our commitment to excellence and customer satisfaction has made us a preferred choice for both business 
              and leisure travelers.
            </Text>
            <Heading size="lg" mt={4}>Our Mission</Heading>
            <Text>
              To provide our guests with an unparalleled hospitality experience through personalized service, 
              luxurious accommodations, and attention to detail.
            </Text>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Container>
  )
}

export default About 