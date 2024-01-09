import {ReactNode} from "react";
import {Providers} from "./providers";
import {Metadata} from "next";
import "./styles/globals.css"

export const metadata: Metadata = {
    title: 'Sell Shield',
    description: 'Garant Service',
}
export const RootLayout = ({children}: {
    children: ReactNode
}) => {
    return (
        <html lang="ru">
            <body className="h-screen bg-primary-image bg-cover bg-no-repeat">
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}
