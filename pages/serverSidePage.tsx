import Layout from '../components/Layout'
import Nav from '../components/serverNav'

interface AppProps {
    message: string
}

export default function App({ message }: AppProps) {
    return (
        <>
            <Layout>
                <Nav />
                <p>{message}</p>
            </Layout>
        </>
    );
}

export const getStaticProps = () => {
    return {
        props:
        {
            message: 'This page is a normal Next page!'
        }
    };
};
