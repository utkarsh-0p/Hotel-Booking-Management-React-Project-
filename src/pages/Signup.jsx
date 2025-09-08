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
  Link,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add signup logic here
  }

  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }}>
      <Stack spacing="8">
        <Stack spacing="6" textAlign="center">
          <Heading size="xl">Create an Account</Heading>
          <Text color="gray.600">
            Join Elite Tower to start booking your luxury stays
          </Text>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={{ base: 'transparent', sm: 'white' }}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing="6">
              <FormControl isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" autoComplete="email" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" autoComplete="new-password" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <Input type="password" autoComplete="new-password" />
              </FormControl>
              <Button type="submit" bg="brand.500" color="white" _hover={{ bg: 'brand.600' }}>
                Create Account
              </Button>
              <Text textAlign="center">
                Already have an account?{' '}
                <Link as={RouterLink} to="/login" color="brand.500">
                  Sign in
                </Link>
              </Text>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Container>
  )
}

export default Signup 