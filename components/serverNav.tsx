import Link from 'next/link';
import navigation from '../data/nav.json'

interface navItem {
    link: string
    text: string
}

export default function Nav() {
    return (
        <>
            <nav>
                {navigation.map(({ link, text }: navItem, index) => (
                    <Link key={index} href={link}>{text}</Link>
                ))}
            </nav>
        </>
    )
};
