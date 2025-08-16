import {Routes, Route} from 'react-router-dom';
import Room from './components/Room';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Room />} />
      </Routes>
    </>
  );
}

export default App;
