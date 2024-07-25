import '../blocks/user.css';
import '../blocks/post.css';
import icon__edit from '../images/icon__edit.svg';
import icon__add from '../images/add.png';
import { useState, useEffect } from 'react';
import { api } from '../utils/api.js';
import { URLUser, URLCards } from '../utils/constants.js';

function Main(props){

    const [userName, setUserName] = useState();
    const [userDescription, setUserDescription] = useState();
    const [userAvatar, setUserAvatar] = useState();
    const [cards, setCards] = useState([]);

    useEffect(()=>{

        const userData = api.getInfoUser(URLUser);
        userData.then(res => {
            setUserName(res.name);
            setUserDescription(res.about);
            setUserAvatar(res.avatar);
        })
        .catch(error => console.log(error))

        const cardsData = api.getInitialCards(URLCards);
        cardsData.then(res => {
            setCards(res)
        })
        .catch(error => console.log(error))

    },[])
    
    return (
        
        <main>
            <section className="user">
                <div className="user__picture" style={{backgroundImage: `url(${userAvatar})`}} onClick={props.onEditAvatarClick}>
                    <div className="user__picture-edit"></div>
                    {/* <img className="user__photo" src={userAvatar}  /> */}
                </div>
                <div className="user__data">
                    <div className="user__data-row">
                        <h1 className="user__name-profile" id="userName">{userName}</h1>
                        <button id="button__edit" className="button button_action_edit" aria-label="Editar perfil" onClick={props.onEditProfileClick}>
                            <img src={icon__edit} alt="Editar perfil" className="button__edit-image" />
                        </button>
                    </div>
                    <p className="user__name-description" id="userDescription">{userDescription}</p>
                </div>
                <div className="user__action">
                    <button id="button__add" className="button button_action_add" aria-label="Añadir post" onClick={props.onAddPlaceClick}>
                        <img src={icon__add} alt="Añadir post" className="button__add-image" />
                    </button>
                </div>
            </section>
            <section className="post" id="post">
                {
                    cards.map(card => (
                        <section key={card._id} className="post__item">
                            <div className="post__image-container" style={{backgroundImage: `url(${card.link})`}}>
                                <button className="button button_action_delete" aria-label="Eliminar post"></button>
                                {/* <img className="post__image" src={card.link} /> */}
                            </div>
                            <div className="post__description">
                                <h2 className="post__name">{card.name}</h2>
                                <div className="post__details">
                                    <button className="button button_action_like" aria-label="Me gusta"></button>
                                    <span className="post__likes">{card.likes.length}</span>
                                </div>
                            </div>
                        </section>
                    ))
                }
            </section>
        </main>
        
    )

}

export default Main;