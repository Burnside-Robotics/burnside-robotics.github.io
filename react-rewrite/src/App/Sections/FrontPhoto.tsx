import HeaderLogo from '../Assets/HeaderLogo.png'
import './FrontPhoto.scss'
export const MainPhoto = () =>
{
    return(
    <div className="parallax-window" id="MainPhoto">
        <img src={HeaderLogo} alt=""/>
      </div>
    );
}