//Este arquivo é criado para definir os próprios 
//temas que não tiver no chakra da aplicação

import { extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
        body: {
            bg: "white.900",
            color: "gray.50"
        }
        },
        colors: {
            '900': '#47585B',
            '800': '#999999',
            '100': '#DADADA',
            '50': '#F5F8FA',
        },
        fonts: {
        heading: 'Roboto',
        body: 'Roboto', 
        }
    }
    });

export default theme

