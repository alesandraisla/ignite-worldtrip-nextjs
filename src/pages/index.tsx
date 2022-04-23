import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import Banner from '../components/Banner'
import Characteristcs from '../components/characteristics'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Slider } from '../components/Slider'

export default function Home() {
  return (
    <Flex
      direction="column">
        <Header />
        <Banner />
        <Characteristcs />
        <Separator />
        <Heading
          textAlign="center"
          fontWeight="500"
          mb={["5", "14"]}
          fontSize={["lg", "3xl", "4xl"]}
        >
          Vamos nessa? <br/>
          Então escolha seu continente
        </Heading>
        <Slider />
    </Flex>
  )
}
