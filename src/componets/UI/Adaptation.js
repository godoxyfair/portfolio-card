import {useMediaQuery} from "react-responsive";

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 750 })
    return isDesktop ? children : null
}

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 750 })
    return isMobile ? children : null
}
