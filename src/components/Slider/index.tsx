import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

export function Slider() {
    return(
        <Flex
            w="100%"
            maxW="1240px"
            mx="auto"
            mb={["5", "10"]}
            h={["250px", "450px"]}
        >
            <Swiper
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
                slidesPerView={1}
                autoplay={{
                    delay: 4000,
                }}
                style={{width: '100%', flex: '1'}}
            >
                <SwiperSlide>
                    <Flex
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        bgImage="url(/assets/europe.png)"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                        bgPosition="center"
                    >
                        <Link href="/continent/eurupe">
                            <a href="">
                                <Heading
                                    fontSize={["3xl", "4xl", "5xl"]}
                                    color="gray.100"
                                    fontWeight="bold"
                                >
                                    Europa
                                </Heading>
                                <Text
                                    fontWeight="bold"
                                    color="gray.300"
                                    fontSize={["0.8rem", "1xl", "2xl"]}
                                    mt={["2", "4"]}
                                >
                                    O continente mais antigo.
                                </Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        bgImage="url(/assets/europe.png)"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                        bgPosition="center"
                    >
                        <Link href="/continent/eurupe">
                            <a href="">
                                <Heading
                                    fontSize={["3xl", "4xl", "5xl"]}
                                    color="gray.100"
                                    fontWeight="bold"
                                >
                                    Europa
                                </Heading>
                                <Text
                                    fontWeight="bold"
                                    color="gray.300"
                                    fontSize={["0.8rem", "1xl", "2xl"]}
                                    mt={["2", "4"]}
                                >
                                    O continente mais antigo.
                                </Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>
            </Swiper>
        </Flex>
    )
}