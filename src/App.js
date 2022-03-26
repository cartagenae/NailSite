import './App.css';

import MainNavigator from './components/MainNavigator/MainNavigator';
import Landing from './pages/Landing/Landing';
import MyStory from './pages/MyStory/MyStory';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigator />
      <main>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/my-story' element={<MyStory />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;
