import { Route, Routes } from 'react-router-dom';

import MainPage from '../../pages/MainPage';
import CharacterPage from '../../pages/CharacterPage/CharacterPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/character/:characterId/:characterName" element={<CharacterPage />} />
      </Routes>
    </>
  );
}

export default App;
