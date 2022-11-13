import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Appbar } from "components/Appbar/Appbar"
import { Container } from "./Layout.styled";

const Layout = () => {
    return (<>
        <Container>
        <Appbar></Appbar>
        <Suspense fallback={null}>
            <Outlet></Outlet>
        </Suspense>
        </Container>
    </>
    )
}

export default Layout;