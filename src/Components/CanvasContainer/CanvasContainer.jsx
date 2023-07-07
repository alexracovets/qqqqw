import Logo from '../Logo/Logo';
import PopUpPoints from '../PopUpPoints/PopUpPoints';
import Canvas from '../Canvas/Canvas';


export default function CanvasContainer() {
    return (
        <div className='canvas-container'>
            <Logo />
            <PopUpPoints />
            <Canvas />
        </div>
    )
}