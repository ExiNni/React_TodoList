import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import TodoList from './component/TodoList';
import Header from './component/Header';
import Footer from './component/Footer';
import Board from './component/Board';

function App(){

    return(
        <Router>
            <div style={{ overflowY: 'scroll', maxHeight: '830px' }}>
                <Header />
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/todo">할 일 목록</Link>
                        </li>
                        <li>
                            <Link to="/board">게시판</Link>
                        </li>
                    </ul>
                </nav>
                <hr />
                <Routes>
                    <Route path="/todo" element={<TodoList/>} />
                </Routes>
                <Routes>
                    <Route path="/board" element={<Board/>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App;