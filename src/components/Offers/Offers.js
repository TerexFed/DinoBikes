import OffersText from "./OffersText"
import bike from '../../images/bikeoffers.png'

function Offers(){
    return(
        <div className="offers">
            <OffersText />
            <img src={bike} />
        </div>
    )
}

export default Offers