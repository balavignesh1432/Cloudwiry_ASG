import { useSelector } from 'react-redux';

import TopSection from './components/TopSection';
import ExpandSection from './components/ExpandSection';

import './App.css';

function App() {

  const expand = useSelector((state) => state.expand)
  
  return (
    <div className="App">
        <TopSection />
        {expand && <ExpandSection />}
    </div>
  );
}

export default App;
