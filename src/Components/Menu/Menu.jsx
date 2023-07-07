export default function Menu() {

    const HideMerker = (event, ...marker) => { // Hide the marker when you click on the button 
        marker.forEach(element => {
            document.getElementById(element).classList.toggle('disable');
        });
        event.target.classList.toggle('active-btn');
    }

    return (
        <div className="menu">
            <h1 className="Menu-text">Menu</h1>
            <button className="paper-btn active-btn" id="paper-anno" onClick={(event) => HideMerker(event, `point1`)}>Paper</button>
            <button className="glass-btn active-btn" id="glass-anno" onClick={(event) => HideMerker(event, `point2`, `point5`)}>Glass</button>
            <button className="plastic-btn active-btn" id="plastic-anno" onClick={(event) => HideMerker(event, `point3`)}>Plastic</button>
            <button className="Metal-btn active-btn" id="metal-anno" onClick={(event) => HideMerker(event, `point4`)}>Metal</button>
            <button className="Bio-waste-btn active-btn" onClick={(event) => HideMerker(event, `point6`)}>Bio Waste</button>
            <button className="Eco-Zones-btn active-btn" onClick={(event) => HideMerker(event, `point7`)}>Eco Zones</button>
            <button className="Other-Waste-btn active-btn" onClick={(event) => HideMerker(event, `point8`)}>Other Waste</button>
            <button className="Eco-report-btn active-btn" onClick={(event) => HideMerker(event, `point9`)}>Eco Report</button>
        </div>
    )
}