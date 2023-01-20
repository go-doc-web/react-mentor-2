import "./App.css";
import Vote from "./modules/Vote/Vote";
import MainMenu from "./modules/MainMenu/MainMenu";

import menuItems from "./data/menuItems.json";
import ToggleButton from "./shared/componets/ToggleButton/ToggleButton";

function App() {
  return (
    <div className="App">
      <MainMenu items={menuItems} />
      <ToggleButton text="Click" type="button" />
      <Vote />
    </div>
  );
}

export default App;
