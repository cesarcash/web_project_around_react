import { useState, useEffect, useContext } from 'react';
import '../blocks/user.css';
import '../blocks/post.css';
import icon__edit from '../images/icon__edit.svg';
import icon__add from '../images/add.png';
import api from '../utils/api';
import { URLUser, URLCards } from '../utils/constants';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main(props){

    // const [userName, setUserName] = useState();
    // const [userDescription, setUserDescription] = useState();
    // const [userAvatar, setUserAvatar] = useState();
    const [cards, setCards] = useState([]);
    const currentUser = useContext(CurrentUserContext);
    console.log("🚀 ~ Main ~ currentUser:", currentUser)

    useEffect( ()=> {

        // const userData = api.getInfoUser(URLUser);
        // userData.then(res => {
        //     setUserName(res.name);
        //     setUserDescription(res.about);
        //     setUserAvatar(res.avatar);
        // })
        // .catch(error => console.log(error))

        const cardsData = api.getInitialCards(URLCards);
        cardsData.then(res => {
            setCards(res)
        })
        .catch(error => console.log(error))

    },[])
    
    return (
        
        <main>
            <section className="user">
                <div className="user__picture" style={{backgroundImage: `url(${currentUser.avatar})`}} onClick={props.onEditAvatarClick}>
                {/* <div className="user__picture" style={{backgroundImage: `url(${userAvatar})`}} onClick={props.onEditAvatarClick}> */}
                    <div className="user__picture-edit"></div>
                    {/* <img className="user__photo" src={userAvatar}  /> */}
                </div>
                <div className="user__data">
                    <div className="user__data-row">
                        <h1 className="user__name-profile" id="userName">{currentUser.name}</h1>
                        {/* <h1 className="user__name-profile" id="userName">{userName}</h1> */}
                        <button id="button__edit" className="button button_action_edit" aria-label="Editar perfil" onClick={props.onEditProfileClick}>
                            <img src={icon__edit} alt="Editar perfil" className="button__edit-image" />
                        </button>
                    </div>
                    <p className="user__name-description" id="userDescription">{currentUser.about}</p>
                    {/* <p className="user__name-description" id="userDescription">{userDescription}</p> */}
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
                        <Card key={card._id} card={card} onCardClick={props.onCardClick}></Card>
                    ))
                }
            </section>
        </main>
        
    )

}

export default Main;