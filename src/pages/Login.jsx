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

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add login logic here
  }

  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }}>
      <Stack spacing="8">
        <Stack spacing="6" textAlign="center">
          <Heading size="xl">Welcome Back</Heading>
          <Text color="gray.600">
            Enter your credentials to access your account
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
                <FormLabel>Email</FormLabel>
                <Input type="email" autoComplete="email" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" autoComplete="current-password" />
              </FormControl>
              <Button type="submit" bg="brand.500" color="white" _hover={{ bg: 'brand.600' }}>
                Sign In
              </Button>
              <Text textAlign="center">
                Don't have an account?{' '}
                <Link as={RouterLink} to="/signup" color="brand.500">
                  Sign up
                </Link>
              </Text>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Container>
  )
}

export default Login 