'use client'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar'
import Link from 'next/link'
import ToggleTheme from './toggleTheme'
import { Earth } from 'lucide-react'

export default function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className="flex items-center space-x-2.5">
          <Earth className="size-7 md:size-9 text-primary" />
          <span className="text-xl sm:text-2xl font-bold">Countries Board</span>
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <ToggleTheme />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
