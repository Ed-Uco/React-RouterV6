import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Preguntas from './components/Preguntas';
import About from './components/About';
import Characters from './pages/Characters';
import Character from './pages/Character';
import data from './rickAndMorty.json';

const router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/preguntas" element={<Preguntas />} />"
                        <Route path="/about" element={<About />} />
                        <Route
                            path="/characters"
                            element={<Characters allCharacters={data} />}
                        >
                            <Route
                                path=":id"
                                element={<Character allCharacters={data} />}
                            />
                        </Route>
                        <Route path="*" element={<div>Not found</div>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default router;
