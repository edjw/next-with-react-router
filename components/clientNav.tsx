/**
 * Navigation for client pages
 */

import NextLink from 'next/link';
import { Link } from 'react-router-dom';

import navigation from '../data/nav.json'

interface navItem {
    link: string
    text: string
    serverSide?: boolean
}

export default function Nav() {
    return (
        <>
            <nav>
                {navigation.map(({ link, text, serverSide }: navItem, index) => (
                    serverSide ?
                        <NextLink key={index} href={link}>{text}</NextLink>
                        :
                        <Link key={index} to={link}>{text}</Link>
                ))}
            </nav>
        </>
    )
};
