import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Appbar } from "components/Appbar/Appbar"


export const Layout = () => {
    return <div>
        <Appbar></Appbar>
        <Suspense fallback={null}>
            <Outlet></Outlet>
        </Suspense>
    </div>
}