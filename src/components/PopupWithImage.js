import '../blocks/popup.css';
import icon__close from '../images/icon__close.svg';

function PopupWithImage(props){

    return (
        <div className={`popup popup_type_${props.name}`} >
            <div className="popup__image">
                <img className="popup__view-image"  />
                <p className="popup__text"></p>
                <button className="button button_action_close" aria-label="Cerrar ventana">
                    <img src={icon__close} className="button__close-image" alt="Cerrar ventana" />
                </button>
            </div>
        </div>
    );

}

export default PopupWithImage;