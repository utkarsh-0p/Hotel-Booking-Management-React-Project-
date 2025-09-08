import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Button,
  VStack,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { FaConcierge, FaBed, FaWifi, FaParking, FaUtensils, FaCalendarAlt } from 'react-icons/fa'
import { ChevronRightIcon } from '@chakra-ui/icons'

function ServiceCard({ title, description, icon, color, modalContent }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box
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
          bg={`${color}10`}
          zIndex="0"
        />

        <VStack spacing={6} align="flex-start" position="relative">
          <Icon as={icon} boxSize={12} color={color} />
          <Heading size="md" color="gray.800">
            {title}
          </Heading>
          <Text color="gray.600" fontSize="md">
            {description}
          </Text>
          <Button
            onClick={onOpen}
            variant="link"
            color={color}
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

      {/* Modal for each service */}
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={color}>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack align="start" spacing={4}>
              <Text>{description}</Text>
              {modalContent && modalContent.map((item, index) => (
                <Text key={index}>• {item}</Text>
              ))}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

function Services() {
  const servicesData = [
    {
      title: '24/7 Concierge',
      description: 'Round-the-clock assistance for all your needs, from restaurant reservations to travel arrangements.',
      icon: FaConcierge,
      color: 'blue.400',
      modalContent: [
        'Personal assistance available 24/7',
        'Restaurant reservations',
        'Travel arrangements and bookings',
        'Local recommendations and guides',
        'Special occasion planning',
        'Transportation services'
      ]
    },
    {
      title: 'Luxury Rooms',
      description: 'Elegantly furnished rooms and suites with premium amenities and stunning city views.',
      icon: FaBed,
      color: 'purple.400',
      modalContent: [
        'Premium bedding and linens',
        'Smart room controls',
        'Panoramic city views',
        'Mini bar and room service',
        'En-suite luxury bathrooms',
        'Daily housekeeping'
      ]
    },
    {
      title: 'High-Speed WiFi',
      description: 'Complimentary high-speed internet access throughout the hotel premises.',
      icon: FaWifi,
      color: 'green.400',
      modalContent: [
        'Complimentary high-speed internet',
        'Coverage throughout the premises',
        'Secure network connection',
        'Multiple device support',
        'Business center access',
        '24/7 technical support'
      ]
    },
    {
      title: 'Valet Parking',
      description: 'Secure parking with professional valet service available 24/7.',
      icon: FaParking,
      color: 'red.400',
      modalContent: [
        '24/7 valet service',
        'Secure parking facility',
        'Camera surveillance',
        'Insurance coverage',
        'Quick retrieval service'
      ]
    },
    {
      title: 'Fine Dining',
      description: 'Multiple restaurants offering international cuisine and 24-hour room service.',
      icon: FaUtensils,
      color: 'orange.400',
      modalContent: [
        'International cuisine',
        '24-hour room service',
        'Award-winning chefs',
        'Premium wine selection',
        'Special dietary accommodations',
        'Private dining options'
      ]
    },
    {
      title: 'Event Spaces',
      description: 'Versatile venues for meetings, weddings, and special occasions.',
      icon: FaCalendarAlt,
      color: 'teal.400',
      modalContent: [
        'Multiple conference rooms',
        'Wedding venues',
        'State-of-the-art AV equipment',
        'Catering services',
        'Event planning assistance',
        'Customizable spaces'
      ]
    }
  ]

  return (
    <Box id="services" py={20} bg="gray.50">
      <Container maxW="1200px">
        <VStack spacing={8} mb={12}>
          <Heading size="xl">Our Services</Heading>
          <Text fontSize="lg" color="gray.600" textAlign="center" maxW="800px">
            Experience world-class hospitality services designed to make your stay exceptional
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Services 