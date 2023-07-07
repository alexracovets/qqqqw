
// The button that appears when you click on the marker and resets the camera to the original position

export default function ResetCamera({ refCamera }) {


    const ResetCamera = () => {

        document.querySelector('.reset-camera-btn').classList.remove('camera-btn-active')

        refCamera.current.refCamera.reset(true);
        refCamera.current.minDistance = 22;
        refCamera.current.maxDistance = 68;

        document.querySelector('.point1').style.display = 'none';
        document.querySelector('.point2').style.display = 'none';
        document.querySelector('.point3').style.display = 'none';
        document.querySelector('.point4').style.display = 'none';
        document.querySelector('.point5').style.display = 'none';
    }
    return (
        <div className='reset-camera-btn' onClick={() => ResetCamera()}>
            <i className="bi bi-x"></i>
        </div>

    )
}

