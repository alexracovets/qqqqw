import './App.css';
import CanvasContainer from './Components/CanvasContainer/CanvasContainer';
import Menu from './Components/Menu/Menu';
import TopBar from './Components/TopBar/TopBar';

function App() {
    return (
        <div className="main-container">
            {/* Site header component */}
            <TopBar />
            {/* Site menu component */}
            <Menu />
            {/* Canvas container component */}
            <CanvasContainer />
        </div>
    );
}

export default App;
