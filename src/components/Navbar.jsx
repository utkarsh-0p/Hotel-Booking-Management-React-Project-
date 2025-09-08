import {
  Box,
  Flex,
  Button,
  Image,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Container,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
} from '@chakra-ui/react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import { FaCalendarAlt, FaUser } from 'react-icons/fa'

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isBookingOpen,
    onOpen: onBookingOpen,
    onClose: onBookingClose
  } = useDisclosure()
  const isMobile = useBreakpointValue({ base: true, md: false })
  const navigate = useNavigate()
  const toast = useToast()

  const scrollToSection = (id) => {
    // First navigate to home if not already there
    if (window.location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    if (isOpen) onClose()
  }

  const handleBookNow = () => {
    onBookingOpen()
    if (isOpen) onClose()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add booking logic here
    toast({
      title: 'Booking Submitted',
      description: "We'll confirm your reservation shortly.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    onBookingClose()
  }

  return (
    <>
      <Box as="nav" position="fixed" w="100%" zIndex="1000" bg="white" boxShadow="sm">
        <Flex 
          maxW="1400px" 
          mx="auto" 
          px={8} 
          py={4} 
          align="center" 
          justify="space-between"
        >
          {/* Logo */}
          <Box 
            cursor="pointer" 
            onClick={() => {
              navigate('/')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <Image h="50px" src="/images/logo.jpg" alt="Elite Tower" />
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <HStack spacing={8} flex={1} justify="center">
                <Link 
                  onClick={() => {
                    navigate('/')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  fontSize="sm" 
                  fontWeight="500"
                  cursor="pointer"
                  color="gray.700" 
                  _hover={{ color: 'brand.500' }}
                  position="relative"
                  _after={{
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '2px',
                    bottom: '-4px',
                    left: '0',
                    bg: 'brand.500',
                    transition: 'width 0.2s ease'
                  }}
                >
                  HOME
                </Link>
                {['ABOUT', 'ROOMS', 'SERVICES', 'CONTACT'].map((item) => (
                  <Link
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    fontSize="sm"
                    fontWeight="500"
                    cursor="pointer"
                    color="gray.700"
                    position="relative"
                    _hover={{ 
                      color: 'brand.500',
                      _after: { width: '100%' }
                    }}
                    _after={{
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '2px',
                      bottom: '-4px',
                      left: '0',
                      bg: 'brand.500',
                      transition: 'width 0.2s ease'
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </HStack>

              <HStack spacing={4}>
                <Button
                  onClick={handleBookNow}
                  size="md"
                  bg="brand.500"
                  color="white"
                  px={6}
                  leftIcon={<FaCalendarAlt />}
                  _hover={{ 
                    bg: 'brand.600',
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg'
                  }}
                  transition="all 0.2s"
                >
                  BOOK NOW
                </Button>

                <Menu>
                  <MenuButton
                    as={Button}
                    variant="ghost"
                    rightIcon={<ChevronDownIcon />}
                    leftIcon={<FaUser />}
                    color="gray.700"
                    _hover={{ bg: 'gray.100' }}
                  >
                    ACCOUNT
                  </MenuButton>
                  <MenuList>
                    <MenuItem 
                      onClick={() => {
                        navigate('/login')
                        onClose()
                      }}
                    >
                      LOGIN
                    </MenuItem>
                    <MenuItem 
                      onClick={() => {
                        navigate('/signup')
                        onClose()
                      }}
                    >
                      SIGN UP
                    </MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
            </>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              onClick={onOpen}
              variant="ghost"
            />
          )}
        </Flex>

        {/* Mobile Drawer */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="stretch" mt={4}>
                <Link
                  onClick={() => {
                    navigate('/')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                    onClose()
                  }}
                  fontSize="sm"
                  fontWeight="500"
                  color="gray.700"
                  cursor="pointer"
                >
                  HOME
                </Link>
                {['ABOUT', 'ROOMS', 'SERVICES', 'CONTACT'].map((item) => (
                  <Link
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    fontSize="sm"
                    fontWeight="500"
                    color="gray.700"
                    cursor="pointer"
                    position="relative"
                    _hover={{ 
                      color: 'brand.500',
                      _after: { width: '100%' }
                    }}
                    _after={{
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '2px',
                      bottom: '-4px',
                      left: '0',
                      bg: 'brand.500',
                      transition: 'width 0.2s ease'
                    }}
                  >
                    {item}
                  </Link>
                ))}
                <Button
                  onClick={handleBookNow}
                  size="md"
                  bg="brand.500"
                  color="white"
                  leftIcon={<FaCalendarAlt />}
                >
                  BOOK NOW
                </Button>
                <VStack spacing={2} align="stretch">
                  <Button
                    onClick={() => {
                      navigate('/login')
                      onClose()
                    }}
                    variant="ghost"
                    leftIcon={<FaUser />}
                  >
                    LOGIN
                  </Button>
                  <Button
                    onClick={() => {
                      navigate('/signup')
                      onClose()
                    }}
                    variant="ghost"
                    leftIcon={<FaUser />}
                  >
                    SIGN UP
                  </Button>
                </VStack>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

      <Modal isOpen={isBookingOpen} onClose={onBookingClose} size="xl">
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
                  <Select>
                    <option value="1">Deluxe Room</option>
                    <option value="2">Executive Suite</option>
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
                  <Input as="textarea" rows={4} />
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
    </>
  )
}

export default Navbar 