import { 
  Box, 
  Button, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  HStack, 
  IconButton, 
  Image,
  SimpleGrid,
  Stack,
  Icon,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { 
  FaConciergeBell, 
  FaCalendarAlt, 
  FaInfoCircle, 
  FaBed, 
  FaWifi, 
  FaParking, 
  FaCoffee,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()
  const toast = useToast()
  const {
    isOpen: isBookingOpen,
    onOpen: onBookingOpen,
    onClose: onBookingClose
  } = useDisclosure()

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
      title: 'Welcome to Elite Tower',
      subtitle: 'Experience luxury and comfort in the heart of the city'
    },
    {
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
      title: 'Luxurious Rooms',
      subtitle: 'Indulge in our spacious and elegant accommodations'
    },
    {
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39',
      title: 'Executive Suites',
      subtitle: 'Perfect for both business and leisure travelers'
    }
  ]

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
      name: 'Presidential Suite',
      description: 'Ultimate luxury with panoramic views',
      price: 499,
      image: '/images/room-3.jpg',
      amenities: ['King Size Bed', 'Free WiFi', 'Parking', 'Coffee Maker']
    }
  ]

  const services = [
    {
      icon: FaConciergeBell,
      title: '24/7 Concierge',
      description: 'Round-the-clock assistance for all your needs, from restaurant reservations to travel arrangements.',
      color: 'blue.400'
    },
    {
      icon: FaBed,
      title: 'Luxury Rooms',
      description: 'Elegantly furnished rooms and suites with premium amenities and stunning city views.',
      color: 'purple.400'
    },
    {
      icon: FaWifi,
      title: 'High-Speed WiFi',
      description: 'Complimentary high-speed internet access throughout the hotel premises.',
      color: 'green.400'
    },
    {
      icon: FaParking,
      title: 'Valet Parking',
      description: 'Secure parking with professional valet service available 24/7.',
      color: 'red.400'
    },
    {
      icon: FaCoffee,
      title: 'Fine Dining',
      description: 'Multiple restaurants offering international cuisine and 24-hour room service.',
      color: 'orange.400'
    },
    {
      icon: FaCalendarAlt,
      title: 'Event Spaces',
      description: 'Versatile venues for meetings, weddings, and special occasions.',
      color: 'teal.400'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    toast({
      title: 'Booking Submitted',
      description: "We'll confirm your reservation shortly.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    onBookingClose()
  }

  const handleBookNow = () => {
    onBookingOpen()
  }

  const handleServicesClick = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box>
      {/* Hero Section with Carousel */}
      <Box 
        position="relative" 
        h="calc(100vh - 80px)" // Subtract navbar height
        overflow="hidden"
        mt="-80px" // Compensate for the padding-top
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            opacity={index === currentSlide ? 1 : 0}
            transition="opacity 0.5s ease-in-out"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              w="100%"
              h="100%"
              objectFit="cover"
            />
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bg="rgba(0,0,0,0.4)"
            />
          </Box>
        ))}

        {/* Carousel Navigation */}
        <IconButton
          aria-label="Previous slide"
          icon={<ChevronLeftIcon />}
          position="absolute"
          left="4"
          top="50%"
          transform="translateY(-50%)"
          onClick={prevSlide}
          colorScheme="whiteAlpha"
          rounded="full"
          size="lg"
        />
        <IconButton
          aria-label="Next slide"
          icon={<ChevronRightIcon />}
          position="absolute"
          right="4"
          top="50%"
          transform="translateY(-50%)"
          onClick={nextSlide}
          colorScheme="whiteAlpha"
          rounded="full"
          size="lg"
        />

        {/* Content */}
        <Container maxW="1200px" h="100%" position="relative">
          <VStack
            h="100%"
            justify="center"
            align="flex-start"
            color="white"
            spacing={6}
            zIndex="1"
          >
            <Heading size="2xl" maxW="800px">
              {slides[currentSlide].title}
            </Heading>
            <Text fontSize="xl" maxW="600px">
              {slides[currentSlide].subtitle}
            </Text>

            {/* Action Buttons */}
            <HStack spacing={4} pt={4}>
              <Button
                onClick={handleBookNow}
                size="lg"
                bg="brand.500"
                color="white"
                _hover={{ bg: 'brand.600' }}
                leftIcon={<FaCalendarAlt />}
                zIndex="2"
              >
                Book Now
              </Button>
              <Button
                onClick={handleServicesClick}
                size="lg"
                bg="whiteAlpha.900"
                color="gray.800"
                _hover={{ bg: 'whiteAlpha.800' }}
                leftIcon={<FaConciergeBell />}
                zIndex="2"
              >
                Our Services
              </Button>
            </HStack>
          </VStack>
        </Container>

        {/* Slide Indicators */}
        <HStack 
          position="absolute" 
          bottom="8" 
          left="50%" 
          transform="translateX(-50%)"
          spacing={2}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              w="2"
              h="2"
              rounded="full"
              bg={index === currentSlide ? 'white' : 'whiteAlpha.600'}
              cursor="pointer"
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </HStack>
      </Box>

      {/* Add Modal outside the hero section */}
      <Modal 
        isOpen={isBookingOpen} 
        onClose={onBookingClose} 
        size="xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent maxW="container.md">
          <ModalHeader>Book Your Stay</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box
              as="form"
              onSubmit={handleSubmit}
              p={4}
              borderRadius="xl"
            >
              <Stack spacing={6}>
                <FormControl isRequired>
                  <FormLabel>Room Type</FormLabel>
                  <Select placeholder="Select room type">
                    <option value="1">Deluxe Room</option>
                    <option value="2">Executive Suite</option>
                    <option value="3">Presidential Suite</option>
                  </Select>
                </FormControl>

                <Stack direction={{ base: 'column', md: 'row' }} spacing={6}>
                  <FormControl isRequired>
                    <FormLabel>Check-in Date</FormLabel>
                    <Input type="date" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Check-out Date</FormLabel>
                    <Input type="date" />
                  </FormControl>
                </Stack>

                <FormControl isRequired>
                  <FormLabel>Number of Guests</FormLabel>
                  <NumberInput max={4} min={1} defaultValue={2}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Special Requests</FormLabel>
                  <Textarea placeholder="Any special requests or requirements?" />
                </FormControl>

                <Button
                  type="submit"
                  size="lg"
                  bg="brand.500"
                  color="white"
                  _hover={{ bg: 'brand.600' }}
                >
                  Confirm Booking
                </Button>
              </Stack>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* About Section */}
      <Box id="about" py={20} bg="gray.50">
        <Container maxW="1200px">
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
            <VStack align="start" spacing={6}>
              <Heading size="xl">About Elite Tower</Heading>
              <Text fontSize="lg" color="gray.600">
                Founded in 1995, Elite Tower has been a symbol of luxury and comfort in the hospitality industry.
                Our commitment to excellence and customer satisfaction has made us a preferred choice for both business
                and leisure travelers.
              </Text>
              <Text fontSize="lg" color="gray.600">
                Our mission is to provide our guests with an unparalleled hospitality experience through personalized
                service, luxurious accommodations, and attention to detail.
              </Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Rooms Section */}
      <Box id="rooms" py={20}>
        <Container maxW="1200px">
          <VStack spacing={8} mb={12}>
            <Heading size="xl">Our Rooms</Heading>
            <Text fontSize="lg" color="gray.600" textAlign="center">
              Choose from our selection of comfortable and luxurious rooms
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
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
                    w="100%"
                    bg="brand.500"
                    color="white"
                    _hover={{ bg: 'brand.600' }}
                  >
                    Book Now
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="services" py={20} bg="gray.50">
        <Container maxW="1200px">
          <VStack spacing={8} mb={12}>
            <Heading size="xl">Our Services</Heading>
            <Text fontSize="lg" color="gray.600" textAlign="center" maxW="800px">
              Experience world-class hospitality services designed to make your stay exceptional
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {services.map((service, index) => (
              <Box
                key={index}
                bg="white"
                p={8}
                borderRadius="xl"
                boxShadow="md"
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-8px)',
                  boxShadow: 'xl'
                }}
                position="relative"
                overflow="hidden"
              >
                {/* Background Gradient */}
                <Box
                  position="absolute"
                  top="-20px"
                  right="-20px"
                  w="120px"
                  h="120px"
                  borderRadius="full"
                  bg={`${service.color}10`}
                  zIndex="0"
                />

                <VStack spacing={6} align="flex-start" position="relative">
                  <Icon
                    as={service.icon}
                    boxSize={12}
                    color={service.color}
                  />
                  <Heading size="md" color="gray.800">
                    {service.title}
                  </Heading>
                  <Text color="gray.600" fontSize="md">
                    {service.description}
                  </Text>
                  <Button
                    variant="ghost"
                    color={service.color}
                    rightIcon={<ChevronRightIcon />}
                    _hover={{
                      transform: 'translateX(4px)',
                      bg: 'transparent'
                    }}
                    transition="all 0.3s"
                    p={0}
                  >
                    Learn More
                  </Button>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" py={20}>
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <VStack align="start" spacing={8}>
              <Heading size="xl">Contact Us</Heading>
              <Text fontSize="lg" color="gray.600">
                We'd love to hear from you. Get in touch with us.
              </Text>
              
              <VStack spacing={4} align="start">
                <HStack>
                  <Icon as={FaPhone} color="brand.500" />
                  <Text>+91 9876543210</Text>
                </HStack>
                <HStack>
                  <Icon as={FaEnvelope} color="brand.500" />
                  <Text>contact@elitetower.com</Text>
                </HStack>
                <HStack align="start">
                  <Icon as={FaMapMarkerAlt} color="brand.500" mt={1} />
                  <Text>
                  Hotel Elite Tower<br />
                      123 Luxury Avenue<br />
                      New Delhi, Delhi 110001
                    </Text>
                </HStack>
              </VStack>
            </VStack>

            <Box as="form" onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" placeholder="Your name" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="your@email.com" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea placeholder="Your message" rows={6} />
                </FormControl>
                <Button 
                  type="submit"
                  w="100%"
                  bg="brand.500"
                  color="white"
                  _hover={{ bg: 'brand.600' }}
                >
                  Send Message
                </Button>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  )
}

export default Home 