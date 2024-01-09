'use client'

import React, { useState } from "react";
import {
    Navbar as NavbarNextUI,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    NavbarMenuToggle, NavbarMenu, NavbarMenuItem
} from "@nextui-org/react";
import {Logo} from "@shared/ui";
import {Montserrat} from "next/font/google";
import {LogInButton, SignUpButton} from "@features/account";
import {menuItems} from "@shared/config";

const montserrat = Montserrat({subsets: ["latin"]})
export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <NavbarNextUI className="bg-primary data-[menu-open=true]:bg-primary-dark" maxWidth="2xl" disableAnimation onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent className="md:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Logo height="50px" width="50px" />
                    <p className={`font-medium text-[20px] text-white ${montserrat.className}`}>Sell Shield</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden md:flex gap-[2vw]" justify="center">
                <NavbarBrand>
                    <Logo height="50px" width="50px" />
                    <p className={`font-medium text-[20px] text-white ${montserrat.className}`}>Sell Shield</p>
                </NavbarBrand>
                {menuItems.map((item, index) => (
                    <NavbarItem key={`${item.title}-${index}`}>
                        <Link
                            className="w-full text-white"
                            href={item.href}
                            size="lg"
                        >
                            {item.title}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent className="hidden md:flex" justify="end">
                <NavbarItem>
                    <div className="flex gap-[1.5vw] items-center">
                        <SignUpButton/>
                        <LogInButton/>
                    </div>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="md:hidden" justify="end">
                <NavbarMenuToggle className="text-white" aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>
            </NavbarContent>

            <NavbarMenu className="bg-primary-dark">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.title}-${index}`}>
                        <Link
                            className="w-full text-white"
                            href={item.href}
                            size="lg"
                        >
                            {item.title}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <SignUpButton/>
                <LogInButton/>
            </NavbarMenu>
        </NavbarNextUI>
    )
}