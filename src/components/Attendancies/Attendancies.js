import Attendance from "./Attendance"

function Attendancies(){
    return(
        <div className="attendancies">
        <Attendance title='Годовое ТО' color='#22356F' />
        <Attendance title='Выравнивание колес' color='#0052C1' />
        <Attendance title='Настройка переключателей' color='#76B58B' />
        </div>
    )
}

export default Attendancies