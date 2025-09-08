import { Box, Image, Text } from '@chakra-ui/react'

function TestImage() {
  const images = [
    '/images/OIP.jpg',
    '/images/download.jpg',
    '/images/cdssdc.jpeg'
  ]

  return (
    <Box p={4}>
      {images.map((src, index) => (
        <Box key={index} mb={4}>
          <Text>Testing image: {src}</Text>
          <Image
            src={src}
            alt={`Test ${index + 1}`}
            w="300px"
            h="200px"
            objectFit="cover"
            border="1px solid gray"
          />
        </Box>
      ))}
    </Box>
  )
}

export default TestImage 