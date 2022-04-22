import { Box, Button, Flex, Grid, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { FiChevronLeft} from 'react-icons/fi';

interface HeaderProps {
    hasBack?: boolean;
}

export function Header() {
    return(
        <Flex
            as="header"
            bg="white"
            w="100%"
            mx="auto"
            px="1rem"
            h={["50px", "188px"]}
            align="center"
            justify="center"
        >
            <Grid
                h="100%"
                mx="auto"
                w="100%"
                maxW="1160px"
                alignItems="center"
                templateColumns="repeat(3, 1fr)"
                justifyContent="center"
            >
                <Image 
                    src="/assets/logo.svg" 
                    alt="WorldTrip" 
                    w={["81px", "184px"]}
                    justifySelf="center"
                    gridColumn="2"
                />
            </Grid>

        </Flex>
    )
}