import '../blocks/user.css';
import '../blocks/post.css';
import icon__edit from '../images/icon__edit.svg';
import icon__add from '../images/add.png';

function Main(props){
    
    console.log("🚀 ~ Main ~ props:", props)

    return (
        
        <main>
            <section className="user">
                <div className="user__picture">
                    <div className="user__picture-edit"></div>
                    <img className="user__photo" src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png" onClick={props.onEditAvatarClick} />
                </div>
                <div className="user__data">
                    <div className="user__data-row">
                        <h1 className="user__name-profile" id="userName"></h1>
                        <button id="button__edit" className="button button_action_edit" aria-label="Editar perfil" onClick={props.onEditProfileClick}>
                            <img src={icon__edit} alt="Editar perfil" className="button__edit-image" />
                        </button>
                    </div>
                    <p className="user__name-description" id="userDescription"></p>
                </div>
                <div className="user__action">
                    <button id="button__add" className="button button_action_add" aria-label="Añadir post" onClick={props.onAddPlaceClick}>
                        <img src={icon__add} alt="Añadir post" className="button__add-image" />
                    </button>
                </div>
            </section>
            <section className="post" id="post"></section>
        </main>
        
    )

}

export default Main;