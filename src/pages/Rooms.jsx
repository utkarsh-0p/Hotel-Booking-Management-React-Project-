import { Box, Container, Heading, SimpleGrid, Image, Text, Button, VStack, HStack, Icon } from '@chakra-ui/react'
import { FaBed, FaWifi, FaParking, FaCoffee } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'

const rooms = [
  {
    id: 1,
    name: 'Deluxe Room',
    description: 'Spacious room with city view',
    price: 199,
    image: '/images/room-1.jpg',
    amenities: ['King Size Bed', 'Free WiFi', 'Parking', 'Coffee Maker']
  },
  {
    id: 2,
    name: 'Executive Suite',
    description: 'Luxury suite with separate living area',
    price: 299,
    image: '/images/room-2.jpg',
    amenities: ['King Size Bed', 'Free WiFi', 'Parking', 'Coffee Maker']
  },
  {
    id: 3,
    name: 'Executive Suite',
    description: 'Luxury suite with separate living area',
    price: 299,
    image: '/images/room-3.jpg',
    amenities: ['King Size Bed', 'Free WiFi', 'Parking', 'Coffee Maker']
  },
  // Add more room types as needed
]

function Rooms() {
  return (
    <Container maxW="1200px" py={12}>
      <VStack spacing={8}>
        <Heading size="2xl">Our Rooms</Heading>
        <Text fontSize="lg" color="gray.600" textAlign="center">
          Choose from our selection of comfortable and luxurious rooms
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="100%">
          {rooms.map((room) => (
            <Box 
              key={room.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
            >
              <Image src={room.image} alt={room.name} h="200px" w="100%" objectFit="cover" />
              <Box p={6}>
                <Heading size="md" mb={2}>{room.name}</Heading>
                <Text color="gray.600" mb={4}>{room.description}</Text>
                <Text fontWeight="bold" fontSize="xl" mb={4}>
                  ${room.price}<Text as="span" fontSize="sm">/night</Text>
                </Text>
                <HStack spacing={4} mb={4}>
                  {room.amenities.map((amenity, index) => (
                    <Icon key={index} as={
                      amenity.includes('Bed') ? FaBed :
                      amenity.includes('WiFi') ? FaWifi :
                      amenity.includes('Parking') ? FaParking :
                      FaCoffee
                    } />
                  ))}
                </HStack>
                <Button 
                  as={RouterLink} 
                  to={`/booking?room=${room.id}`}
                  colorScheme="blue" 
                  width="100%"
                >
                  Book Now
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}

export default Rooms 