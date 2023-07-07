import { Html } from '@react-three/drei'
import { useThree } from '@react-three/fiber';

export default function Annotations({ refCamera }) {
    const { scene } = useThree();

    const ClickHandler = (event, id) => {

        document.querySelector(`.${event.target.id}`).style.display = 'flex';
        refCamera.current.refCamera.minDistance = 7;
        refCamera.current.refCamera.maxDistance = 10;

        document.querySelector('.reset-camera-btn').classList.add('camera-btn-active');

        setTimeout(() => {
            refCamera.current.refCamera.fitToBox(scene.getObjectByName(`point${id}`),
                true,
                { paddingLeft: 2, paddingRight: 2, paddingBottom: 10, paddingTop: 10 })
        }, 200);
    }

    const MatkersList = [
        {
            position: [-16, 2, 8.5],
            img: './img/anno1.svg',
            id: 1
        },
        {
            position: [-7.4, 3.64, 7.56],
            img: './img/anno2-5.svg',
            id: 2
        },
        {
            position: [-3.8, 3, 15],
            img: './img/anno3.svg',
            id: 3
        },

        {
            position: [-8.1, 2.1, 8.1],
            img: './img/anno4.svg',
            id: 4
        },
        {
            position: [-18.5, 2.15, 11.5],
            img: './img/anno2-5.svg',
            id: 5
        },
        {
            position: [-0.5, 2.3, -23.2],
            img: './img/anno8.svg',
            id: 6
        },
        {
            position: [-18.2, 2.2, 6.4],
            img: './img/anno7.svg',
            id: 7
        },
        {
            position: [-17, 2.5, 6.4],
            img: './img/anno6.svg',
            id: 8
        },
        {
            position: [6.9, 3, -15.3],
            img: './img/anno9.svg',
            id: 9
        }
    ]

    return (
        MatkersList.map(function (item) {
            return (
                <Html occlude distanceFactor={3.5} position={item.position} key={item.id}>
                    <img
                        className='anno metal-anno'
                        id={`point${item.id}`}
                        src={item.img}
                        onClick={(event) => ClickHandler(event, item.id)}
                        alt={`anno${item.id}`}
                    />
                </Html>
            )
        })
    );
}