import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import Banner from '../components/Banner'
import Characteristcs from '../components/characteristics'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <Flex
      direction="column">
        <Header />
        <Banner />
        <Characteristcs />
    </Flex>
  )
}
