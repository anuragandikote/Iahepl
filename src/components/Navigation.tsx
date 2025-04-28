'use client'
import React, { useState } from 'react'
import Link from 'next/link'

type MenuItems = {
    [key: string]: string[]
}

type NavigationProps = {
    menuItems: MenuItems
}

export default function Navigation({ menuItems }: NavigationProps) {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)

    const getItemLink = (item: string, subItem?: string) => {
        const formatUrl = (text: string) => text?.toLowerCase()?.replace(/\s+/g, '-')
        
        switch(item) {
            case 'HOME':
                return '/'
            case 'GALLERY':
                return '/gallery'
            case 'CONTACT US':
                return '/contact-us'
            case 'FAQ':
                return '/faq'
            case 'WRITTEN EXAM COACHING':
                return `/written-exam-coaching/${formatUrl(subItem!)}`
            case 'SSB INTERVIEW':
                return `/ssb-interview/${formatUrl(subItem!)}`
            /* case 'OUR BRANCHES':
                return `/branches/${formatUrl(subItem!)}` */
            /* case 'SSB HELP':
                return `/ssb-help/${formatUrl(subItem!)}` */
            default:
                return '/'
        }
    }

    return (
        <nav className="bg-red-900 text-white relative z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-10 px-2 md:px-0">
                {/* Hamburger for mobile */}
                <button
                    className="md:hidden flex items-center px-2 py-2 focus:outline-none"
                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
                {/* Desktop Menu */}
                <ul className="hidden md:flex p-1">
                    {Object.entries(menuItems).map(([item, dropdownItems]) => (
                        <li
                            key={item}
                            className="relative"
                            onMouseEnter={() => setActiveDropdown(item)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link href={getItemLink(item)}>
                                <div className={`px-4 py-2 text-xs hover:bg-white hover:text-red-800 hover:rounded-sm cursor-pointer flex items-center gap-2 transition-colors duration-100 ease-in-out ${activeDropdown === item ? 'bg-white text-red-800' : ''}`}>
                                    {item}
                                    {dropdownItems.length > 0 && (
                                        <svg
                                            className="w-4 h-4 transition-transform duration-100 ease-in-out"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    )}
                                </div>
                            </Link>
                            {dropdownItems.length > 0 && activeDropdown === item && (
                                <ul className="absolute top-full left-0 bg-white w-auto shadow-lg z-50 rounded-b-md overflow-hidden">
                                    {dropdownItems.map((subItem) => (
                                        <li
                                            key={subItem}
                                            className="px-4 py-3 m-1 text-xs text-black rounded-sm hover:bg-red-900 hover:text-white cursor-pointer whitespace-nowrap transition-colors duration-100 ease-in-out"
                                        >
                                            <Link
                                                href={getItemLink(item, subItem)}
                                                className="block w-full h-full"
                                            >
                                                {subItem}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-200 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col bg-red-900 w-full">
                    {Object.entries(menuItems).map(([item, dropdownItems]) => (
                        <li key={item} className="relative border-b border-red-800">
                            <div
                                className={`flex items-center justify-between px-4 py-3 text-xs cursor-pointer hover:bg-white hover:text-red-800 transition-colors duration-100 ease-in-out ${mobileDropdown === item ? 'bg-white text-red-800' : ''}`}
                                onClick={() =>
                                    dropdownItems.length > 0
                                        ? setMobileDropdown(mobileDropdown === item ? null : item)
                                        : setMobileMenuOpen(false)
                                }
                            >
                                <Link href={getItemLink(item)} className="flex-1">
                                    {item}
                                </Link>
                                {dropdownItems.length > 0 && (
                                    <svg
                                        className={`w-4 h-4 ml-2 transition-transform duration-100 ease-in-out ${mobileDropdown === item ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                )}
                            </div>
                            {dropdownItems.length > 0 && mobileDropdown === item && (
                                <ul className="bg-white">
                                    {dropdownItems.map((subItem) => (
                                        <li
                                            key={subItem}
                                            className="px-6 py-3 text-xs text-black hover:bg-red-900 hover:text-white cursor-pointer transition-colors duration-100 ease-in-out"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <Link
                                                href={getItemLink(item, subItem)}
                                                className="block w-full h-full"
                                            >
                                                {subItem}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}