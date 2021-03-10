import Background from './components/background';
import "../src/css/style.css";
import ItemsNav from "./componentTwo/ItemsNav"
import Items from './componentTwo/Items';

function App() {
  return (
    <div>
      <Background />
      <ItemsNav />
      <Items />
    </div>
  );
}

export default App;
