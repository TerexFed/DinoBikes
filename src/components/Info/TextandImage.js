import InfoText from "./InfoText"
import Dino from '../../images/dino.svg'


function TextAndImage(){
    return(
    <div className="textandimage">
        <InfoText />
        <img src={Dino}/>
    </div>
    )
}

export default TextAndImage