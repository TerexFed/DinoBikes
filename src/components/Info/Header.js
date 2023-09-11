import {ReactComponent as Logo} from '../../images/logo.svg'

function Header(){
    return (
        <div className='header'>
        <Logo />
        <div className='headerlinks'>
            <h4>О нас</h4>
            <h4>Услуги</h4>
            <h4>Аренда</h4>
        </div>
        <div className='Contact'><h4 >Связаться</h4></div>
        </div>
    )
}

export default Header