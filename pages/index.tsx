import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout'
import Nav from '../components/clientNav'

import Home from '../clientPages/Home'
import About from '../clientPages/About'
import Topics from '../clientPages/Topics'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/topics" element={<Topics />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
}
