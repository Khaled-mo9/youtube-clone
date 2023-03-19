import './App.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Watch from './Pages/Watch';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getHomePageVideos } from './Store/GetHomeVideosSlice';
import { getSearched } from './Store/GetSearchItems';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomePageVideos());
    // dispatch(getSearched('music'));
  })


  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        {/* <Sidebar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/search/watch/:id' element={<Watch />} />
          <Route path='/watch/:id' element={<Watch />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
