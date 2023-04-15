import './App.css';
import CatSelect from './CatSelect/CatSelect';
import CategoryCard from './Components/Cards/CategoryCard';
import Header from './Header/Header';
import GameBoard from './GameBoard/GameBoard';



function App() {
  return (
    <div>
      <Header />
      {/* <CatSelect /> */}
      <GameBoard />
    </div>
  );
}

export default App;
