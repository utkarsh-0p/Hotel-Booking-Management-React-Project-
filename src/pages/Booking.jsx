import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Select,
  useToast,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'

function Booking() {
  const [searchParams] = useSearchParams()
  const roomId = searchParams.get('room')
  const toast = useToast()

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
  }

  return (
    <Container maxW="container.md" py={12}>
      <Stack spacing={8}>
        <Box textAlign="center">
          <Heading size="xl">Book Your Stay</Heading>
          <Text mt={4} color="gray.600">
            Complete your booking details below
          </Text>
        </Box>

        <Box
          as="form"
          onSubmit={handleSubmit}
          p={8}
          bg="white"
          boxShadow="md"
          borderRadius="xl"
        >
          <Stack spacing={6}>
            <FormControl isRequired>
              <FormLabel>Room Type</FormLabel>
              <Select defaultValue={roomId || ""}>
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
      </Stack>
    </Container>
  )
}

export default Booking 