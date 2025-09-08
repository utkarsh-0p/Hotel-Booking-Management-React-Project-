import { 
  Box, 
  Container, 
  Heading, 
  SimpleGrid, 
  VStack, 
  FormControl, 
  FormLabel, 
  Input, 
  Textarea, 
  Button, 
  Text, 
  Icon,
  HStack,
  useToast
} from '@chakra-ui/react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { useState } from 'react'

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Add your form submission logic here
      // Simulating API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000))

      toast({
        title: "Message Sent!",
        description: "We'll get back to you soon.",
        status: "success",
        duration: 5000,
        isClosable: true,
      })

      // Reset form
      e.target.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box bg="gray.50" py={20}>
      <Container maxW="1200px">
        <VStack spacing={8} mb={12}>
          <Heading size="2xl">Contact Us</Heading>
          <Text fontSize="lg" color="gray.600" textAlign="center" maxW="600px">
            We'd love to hear from you. Please get in touch with us for any inquiries or assistance.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16}>
          {/* Contact Form */}
          <Box 
            bg="white" 
            p={8} 
            borderRadius="xl" 
            boxShadow="lg"
            order={{ base: 2, md: 1 }}
          >
            <form onSubmit={handleSubmit}>
              <VStack spacing={6}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input 
                    type="text" 
                    placeholder="Your name"
                    _focus={{
                      borderColor: 'brand.500',
                      boxShadow: '0 0 0 1px brand.500'
                    }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input 
                    type="email" 
                    placeholder="your@email.com"
                    _focus={{
                      borderColor: 'brand.500',
                      boxShadow: '0 0 0 1px brand.500'
                    }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Subject</FormLabel>
                  <Input 
                    type="text" 
                    placeholder="How can we help?"
                    _focus={{
                      borderColor: 'brand.500',
                      boxShadow: '0 0 0 1px brand.500'
                    }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea 
                    placeholder="Your message"
                    rows={6}
                    _focus={{
                      borderColor: 'brand.500',
                      boxShadow: '0 0 0 1px brand.500'
                    }}
                  />
                </FormControl>

                <Button
                  type="submit"
                  bg="brand.500"
                  color="white"
                  size="lg"
                  w="100%"
                  _hover={{ bg: 'brand.600' }}
                  isLoading={isSubmitting}
                  loadingText="Sending..."
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>

          {/* Contact Information */}
          <VStack 
            spacing={8} 
            align="start"
            order={{ base: 1, md: 2 }}
          >
            <Box>
              <Heading size="lg" mb={6}>Get in Touch</Heading>
              <VStack spacing={6} align="start">
                <HStack spacing={4}>
                  <Icon as={FaPhone} color="brand.500" boxSize={5} />
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="bold">Phone</Text>
                    <Text color="gray.600">+91 9876543210</Text>
                  </VStack>
                </HStack>

                <HStack spacing={4}>
                  <Icon as={FaEnvelope} color="brand.500" boxSize={5} />
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="bold">Email</Text>
                    <Text color="gray.600">contact@elitetower.com</Text>
                  </VStack>
                </HStack>

                <HStack spacing={4} align="start">
                  <Icon as={FaMapMarkerAlt} color="brand.500" boxSize={5} mt={1} />
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="bold">Address</Text>
                    <Text color="gray.600">
                      Hotel Elite Tower<br />
                      123 Luxury Avenue<br />
                      New Delhi, Delhi 110001
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
            </Box>

            {/* Map */}
            <Box 
              w="100%" 
              h="300px" 
              bg="gray.200" 
              borderRadius="xl" 
              overflow="hidden"
              position="relative"
            >
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=New+Delhi,India`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Contact 