import { Flex } from "@chakra-ui/react";
import { Cities } from "../../components/Cities";
import { Content } from "../../components/content";
import { ContinentBanner } from "../../components/continentBanner";
import { Header } from "../../components/Header";

export interface ContinentProps {
    continent: {
        slug: string;
        title: string;
        description: string;
        banner_image: string;
        countries: number;
        languages: number;
        cities: number;
        cities_list: string;
        cities100: { 
            city: string;
            country: string;
            thumbnail: string;
            flga: string;
        }[]
    }
}

export default function Continent({continent}: ContinentProps) {
    // const router = useRouter();
    // if(router.isFallback) {
    //      return <Loading />
    // }
    return(
        <Flex direction="column">
            <Header />
            <ContinentBanner />
            <Flex
                direction="column"
                maxW="1160px"
                mx="auto"
                mb="10"
                px="1rem"
            >
                <Content />
                <Cities />
            </Flex>
        </Flex>
    )
}