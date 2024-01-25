import "./parallax.css";

function Parallax() {
    return (
        <div className="parallax-effect">
            <img className="layer-1"  src="./src/assets/parallax/ROCKS-FRONT.png" alt="rocas espaciales" />
            <img className="layer-2"  src="./src/assets/parallax/ROCKS-BEHIND.png" alt="rocas espaciales" />
            <img className="layer-3"  src="./src/assets/parallax/ROCKS-BEHIND-2.png" alt="rocas espaciales" />
            <img className="layer-4"  src="./src/assets/parallax/EARTH.png" alt="planeta tierra" />
        </div> 
    )
}

export default Parallax; 