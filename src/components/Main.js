import { useState, useEffect, useContext } from 'react';
import '../blocks/user.css';
import '../blocks/post.css';
import icon__edit from '../images/icon__edit.svg';
import icon__add from '../images/add.png';
import api from '../utils/api';
import { URLCards, URLCardLike } from '../utils/constants';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main(props){

    // const [cards, setCards] = useState([]);
    const currentUser = useContext(CurrentUserContext);

    // function handleCardLike(card){
        
    //     const isLiked = card.likes.some(i => i._id === currentUser._id);

    //     api.changeLikeCardStatus(URLCardLike+'/'+card._id, !isLiked)
    //     .then((newCard) => {
    //         setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    //     });

    // }

    // function handleCardDelete(card){

    //     api.deleteCard(`${URLCards}/${card._id}`)
    //     .then(res => {
    //         console.log("🚀 ~ handleCardDelete ~ res:", res)
    //     })
    //     .catch(error => console.error(error))

    //     setCards(cards.filter(itemCard => itemCard._id !== card._id ))

    // }

    // useEffect( ()=> {

    //     const cardsData = api.getInitialCards(URLCards);
    //     cardsData.then(res => {
    //         setCards(res)
    //     })
    //     .catch(error => console.log(error))

    // },[])

    return (
        
        <main>
            <section className="user">
                <div className="user__picture" style={{backgroundImage: `url(${currentUser?.avatar})`}} onClick={props.onEditAvatarClick}>
                    <div className="user__picture-edit"></div>
                </div>
                <div className="user__data">
                    <div className="user__data-row">
                        <h1 className="user__name-profile" id="userName">{currentUser?.name}</h1>
                        <button id="button__edit" className="button button_action_edit" aria-label="Editar perfil" onClick={props.onEditProfileClick}>
                            <img src={icon__edit} alt="Editar perfil" className="button__edit-image" />
                        </button>
                    </div>
                    <p className="user__name-description" id="userDescription">{currentUser?.about}</p>
                </div>
                <div className="user__action">
                    <button id="button__add" className="button button_action_add" aria-label="Añadir post" onClick={props.onAddPlaceClick}>
                        <img src={icon__add} alt="Añadir post" className="button__add-image" />
                    </button>
                </div>
            </section>
            <section className="post" id="post">
                {
                    props.cards.map(card => (
                        <Card key={card._id} card={card} onCardDelete={props.onCardDelete} onCardLike={props.onCardLike} onCardClick={props.onCardClick}></Card>
                    ))
                }
            </section>
        </main>
        
    )

}

export default Main;