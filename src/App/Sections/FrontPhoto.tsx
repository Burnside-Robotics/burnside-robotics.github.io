import HeaderLogo from '../Assets/Photos/HeaderLogo.png'
import './FrontPhoto.scss'
export const MainPhoto = () =>
{
    return(
    <section className="parallax-window" id="MainPhoto">
        <img src={HeaderLogo} alt=""/>
      </section>
    );
}