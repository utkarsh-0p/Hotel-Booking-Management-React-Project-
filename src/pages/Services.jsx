import { Box, Container, Heading, SimpleGrid, Icon, Text, VStack } from '@chakra-ui/react'
import { FaSwimmingPool, FaUtensils, FaSpa, FaWifi, FaCar, FaDumbbell } from 'react-icons/fa'

const services = [
  {
    icon: FaSwimmingPool,
    title: 'Swimming Pool',
    description: 'Enjoy our temperature-controlled pool with a stunning view'
  },
  {
    icon: FaUtensils,
    title: 'Restaurant',
    description: '24/7 dining with international cuisine'
  },
  {
    icon: FaSpa,
    title: 'Spa & Wellness',
    description: 'Rejuvenate yourself with our spa treatments'
  },
  {
    icon: FaWifi,
    title: 'Free Wi-Fi',
    description: 'High-speed internet throughout the hotel'
  },
  {
    icon: FaCar,
    title: 'Valet Parking',
    description: 'Complimentary valet parking service'
  },
  {
    icon: FaDumbbell,
    title: 'Fitness Center',
    description: 'State-of-the-art fitness equipment'
  }
]

function Services() {
  return (
    <Container maxW="1200px" py={12}>
      <VStack spacing={8}>
        <Heading size="2xl">Our Services</Heading>
        <Text fontSize="lg" color="gray.600" textAlign="center">
          Experience luxury with our premium services and amenities
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="100%">
          {services.map((service, index) => (
            <Box
              key={index}
              p={8}
              borderWidth="1px"
              borderRadius="lg"
              textAlign="center"
              _hover={{ boxShadow: 'lg' }}
              transition="all 0.3s"
            >
              <Icon as={service.icon} w={10} h={10} color="blue.500" mb={4} />
              <Heading size="md" mb={4}>{service.title}</Heading>
              <Text color="gray.600">{service.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}

export default Services 