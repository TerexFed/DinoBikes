import Attendancies from "./Attendancies/Attendancies"
import Bikerent from "./Bikerent/Bikerent"
import Comment from "./Comment"
import Info from "./Info/Info"
import Offers from "./Offers/Offers"

function App(){
    return(
        <>
        <Info />
        <Offers />
        <Comment />
        <Attendancies />
        <Bikerent />
        </>
    )
}

export default App