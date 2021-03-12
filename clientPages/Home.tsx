import Image from 'next/image'
export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <Image layout='responsive' width={1024} height={605} src='/image.jpg' />
        </>
    )
};
