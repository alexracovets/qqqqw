
// A pop-up that appears when the marker is enlarged

import ItemPoint from "./ItemPoint/ItemPoint";

export default function PopUpPoints() {

    const pointsList = [
        {
            tagName: 'Paper',
            img: './img/points.jpg',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
            link: 'https://www.youtube.com/',
            id: 1
        },
        {
            tagName: 'Glass',
            img: './img/points.jpg',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
            link: 'https://www.youtube.com/',
            id: 2
        },
        {
            tagName: 'Plastic',
            img: './img/points.jpg',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
            link: 'https://www.youtube.com/',
            id: 3
        },
        {
            tagName: 'Metal',
            img: './img/points.jpg',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
            link: 'https://www.youtube.com/',
            id: 4
        },
        {
            tagName: 'Glass',
            img: './img/points.jpg',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
            link: 'https://www.youtube.com/',
            id: 5
        },
        {
            tagName: 'Bio Waste',
            img: './img/points.jpg',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
            link: 'https://www.youtube.com/',
            id: 6
        },
        {
            tagName: 'Eco Zones',
            img: './img/points.jpg',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
            link: 'https://www.youtube.com/',
            id: 7
        },
        {
            tagName: 'Other Waste',
            img: './img/points.jpg',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
            link: 'https://www.youtube.com/',
            id: 8
        },
        {
            tagName: 'Eco Report',
            img: './img/points.jpg',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
            link: 'https://www.youtube.com/',
            id: 9
        }
    ]

    return (
        pointsList.map(function (item) {
            return (
                <ItemPoint key={item.id} id={item.id} name={item.tagName} img={item.img} text={item.text} link={item.link} />
            )
        })
    );
}

