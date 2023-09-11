import './App.css';
import InputEvent from './EventComponnet/inputEvent';
import MouseEvent from './EventComponnet/mouseEvent';
import ButtonEvent from './EventComponnet/ButtonEvent.js';
import ColorChnge from './EventComponnet/ColorChnge';
import Textform from './EventComponnet/Textform';

function App() {
  return (
    <div>
      <ColorChnge />
      <Textform heading="new Box" />
      <div className="input">
        <InputEvent />
      </div>
      <div className="mouse">
        <MouseEvent />
      </div>
      <div className="button">
        <ButtonEvent />
      </div>
    </div>
  );
}

export default App;
