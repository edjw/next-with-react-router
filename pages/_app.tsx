import { AppProps } from 'next/app';
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
    return (
        <div suppressHydrationWarning>
            {typeof window === 'undefined' ? null : <Component {...pageProps} />}
        </div>
    );
}
export default App;