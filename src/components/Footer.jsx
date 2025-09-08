import { 
  Box, 
  Container, 
  SimpleGrid, 
  Stack, 
  Text, 
  Image, 
  Link, 
  Icon,
  Input,
  Button,
  Divider,
  VStack,
  Heading,
  HStack,
  useToast,
  IconButton
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa'
import { useState, useEffect } from 'react'

function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const toast = useToast()

  // Check scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    toast({
      title: "Subscribed Successfully",
      description: "Thank you for subscribing to our newsletter!",
      status: "success",
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <Box bg="gray.900" color="white" position="relative">
      {/* Scroll to Top Button */}
      <IconButton
        aria-label="Scroll to top"
        icon={<FaArrowUp />}
        size="lg"
        colorScheme="brand"
        position="fixed"
        bottom="4"
        right="4"
        zIndex="999"
        rounded="full"
        onClick={scrollToTop}
        opacity={showScrollTop ? 1 : 0}
        visibility={showScrollTop ? 'visible' : 'hidden'}
        transform={showScrollTop ? 'translateY(0)' : 'translateY(100px)'}
        transition="all 0.3s"
        _hover={{
          transform: 'translateY(-4px)',
          boxShadow: 'lg'
        }}
      />

      {/* Gradient Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="100px"
        bgGradient="linear(to-b, transparent, gray.900)"
      />

      <Container maxW="1400px" py={16} position="relative">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={12}>
          {/* Brand Section */}
          <VStack align="flex-start" spacing={6}>
            <Image h="50px" src="/images/logo.jpg" alt="Elite Tower" />
            <Text fontSize="sm" color="gray.400" lineHeight="tall">
              Experience luxury and comfort in the heart of the city. Elite Tower offers world-class amenities and unforgettable stays.
            </Text>
            <Stack direction="row" spacing={4}>
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((icon, index) => (
                <Link
                  key={index}
                  href="#"
                  bg="whiteAlpha.200"
                  rounded="full"
                  w="40px"
                  h="40px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  _hover={{
                    bg: 'brand.500',
                    transform: 'translateY(-2px)',
                    shadow: 'lg'
                  }}
                  transition="all 0.3s"
                >
                  <Icon as={icon} />
                </Link>
              ))}
            </Stack>
          </VStack>

          {/* Quick Links */}
          <VStack align="flex-start" spacing={4}>
            <Heading size="md" mb={2} color="white">Quick Links</Heading>
            {['About Us', 'Rooms', 'Services', 'Contact'].map((item) => (
              <Link
                key={item}
                as={RouterLink}
                to={`/${item.toLowerCase().replace(' ', '')}`}
                color="gray.400"
                _hover={{ 
                  color: 'brand.500',
                  transform: 'translateX(4px)'
                }}
                fontSize="sm"
                transition="all 0.3s"
                display="flex"
                alignItems="center"
              >
                {item}
              </Link>
            ))}
          </VStack>

          {/* Contact Info */}
          <VStack align="flex-start" spacing={4}>
            <Heading size="md" mb={2} color="white">Contact Us</Heading>
            <Stack spacing={4} color="gray.400">
              <HStack 
                spacing={4} 
                _hover={{ color: 'brand.500' }}
                transition="all 0.3s"
              >
                <Icon as={FaPhone} />
                <Text fontSize="sm">+91 9876543210</Text>
              </HStack>
              <HStack 
                spacing={4}
                _hover={{ color: 'brand.500' }}
                transition="all 0.3s"
              >
                <Icon as={FaEnvelope} />
                <Text fontSize="sm">contact@elitetower.com</Text>
              </HStack>
              <HStack 
                align="flex-start" 
                spacing={4}
                _hover={{ color: 'brand.500' }}
                transition="all 0.3s"
              >
                <Icon as={FaMapMarkerAlt} mt={1} />
                <Text fontSize="sm">
                  Hotel Elite Tower<br />
                  New Delhi, Delhi 110001
                </Text>
              </HStack>
            </Stack>
          </VStack>

          {/* Newsletter */}
          <VStack align="flex-start" spacing={4}>
            <Heading size="md" mb={2} color="white">Newsletter</Heading>
            <Text fontSize="sm" color="gray.400">
              Subscribe to our newsletter for special offers and updates.
            </Text>
            <form onSubmit={handleSubscribe} style={{ width: '100%' }}>
              <Stack spacing={3} w="100%">
                <Input
                  placeholder="Your email"
                  bg="whiteAlpha.100"
                  border={0}
                  _hover={{
                    bg: 'whiteAlpha.200'
                  }}
                  _focus={{
                    bg: 'whiteAlpha.200',
                    borderColor: 'brand.500'
                  }}
                  required
                  type="email"
                />
                <Button 
                  type="submit"
                  bg="brand.500"
                  _hover={{
                    bg: 'brand.600',
                    transform: 'translateY(-2px)',
                    shadow: 'lg'
                  }}
                  transition="all 0.3s"
                >
                  Subscribe
                </Button>
              </Stack>
            </form>
          </VStack>
        </SimpleGrid>

        <Divider my={8} borderColor="whiteAlpha.300" />

        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          fontSize="sm"
          color="gray.400"
          spacing={{ base: 4, md: 0 }}
        >
          <Text>
            © {new Date().getFullYear()} Elite Tower. All rights reserved.
          </Text>
          <Stack 
            direction="row" 
            spacing={6}
            divider={
              <Text color="whiteAlpha.300" mx={2}>|</Text>
            }
          >
            <Link 
              href="#" 
              _hover={{ color: 'brand.500' }}
              transition="all 0.3s"
            >
              Privacy Policy
            </Link>
            <Link 
              href="#" 
              _hover={{ color: 'brand.500' }}
              transition="all 0.3s"
            >
              Terms of Service
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer 