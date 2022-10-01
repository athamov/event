import {lazy,Suspense} from 'react'
import {Routes, Route} from 'react-router-dom'
import Loader from './components/Loader'
import './App.css';
const Home = lazy(() =>import('./components/Home'));
const Create = lazy(() =>import('./components/Create'));
const Event = lazy(() =>import('./components/Event'));


function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
