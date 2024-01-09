import { Navbar } from "@widgets/navbar";
import {ReactNode} from "react";

export const BaseLayout = ({children}: { children: ReactNode }) => {
    return (
        <>
            <Navbar/>
            {children}
        </>
    )
}