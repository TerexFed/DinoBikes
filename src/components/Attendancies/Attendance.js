function Attendance(props){

   let {title, color} = props

    return(
        <div className="attendance" style={{ backgroundColor: color }}>
            <hr />
            <h2>{title}</h2>
        </div>
    )
}

export default Attendance