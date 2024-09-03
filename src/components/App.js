import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {

    const [isEditProfilePopupOpen, setEditProfile] = useState(false);
    const [isAddPlacePopupOpen, setAddPlace] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatar] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [cards, setCards] = useState([]);

    useEffect( ()=> {

        const fetchInitialCards = async () => {
            
            try {
        
                const cardsData = await api.getInitialCards();
                setCards(cardsData)
        
            }catch(error){
                alert('Error:',error)
            }
    
        }
    
        const fetchUserInfo = async () => {
            
            try {
                const userInfo = await api.getInfoUser();
                setCurrentUser(userInfo);
            } catch(error) {
                alert(`Error ${error}`);
            }
    
        }

        fetchUserInfo()
        fetchInitialCards()
        
    },[])
    

    function handleCardLike(card){

        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.changeLikeCardStatus(card._id, !isLiked)
        .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });

    }

    async function handleCardDelete(card){

        try {
            await api.deleteCard(card._id)
        }catch(error){
            alert('Error: ',error)
        }

        setCards(cards.filter(itemCard => itemCard._id !== card._id ))

    }

    function handleCardClick(card){
        setSelectedCard(card)
    }
    
    function handleEditAvatarClick(){
        setEditAvatar(true)
    }
    
    function handleEditProfileClick(){
        setEditProfile(true)
    }

    function handleAddPlaceClick(){
        setAddPlace(true)
    }
    
    function closeAllPopups(){
        
        setEditAvatar(false)
        setEditProfile(false)
        setAddPlace(false)
        setSelectedCard(null)

    }

    const handleUpdateUser = async (data) => {
        
        try{

            const user = await api.setUserInfo(data) 
            setCurrentUser(user)
            closeAllPopups();

        }catch(error){
            alert(`Error: ${error}`);
        }

    }

    const handleUpdateAvatar = async (data) => {
        
        try{

            const avatar = await api.editImgUser(data)
            setCurrentUser(avatar);
            closeAllPopups();

        }catch(error){
            alert(`Error: ${error}`);
        }

    }

    const handleAddPlaceSubmit = async (data) => {

        try{

            const newCard = await api.setNewCard(data)
            setCards([newCard, ...cards])
            closeAllPopups();

        }catch(error){
            alert(`Error: ${error}`);
        }        

    }

    return (        

        <CurrentUserContext.Provider value={currentUser}>

            {isEditAvatarPopupOpen && (<EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}></EditAvatarPopup>)}

            {isEditProfilePopupOpen && (<EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}></EditProfilePopup>)}

            {isAddPlacePopupOpen && (<AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlaceSubmit={handleAddPlaceSubmit}></AddPlacePopup>)}

            {selectedCard && (<ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>)}

            {currentUser && (
                <div className="page">
                    <div className="page__container">
                        <Header></Header>
                        <Main 
                            onEditProfileClick={handleEditProfileClick} 
                            onAddPlaceClick={handleAddPlaceClick} 
                            onEditAvatarClick={handleEditAvatarClick} 
                            onCardClick={handleCardClick} 
                            cards={cards}
                            onCardLike={handleCardLike}
                            onCardDelete={handleCardDelete} >
                        </Main>
                        <Footer></Footer>
                    </div>
                </div>
            )}

            {/* confirmacion */}
            {/* <div className="popup" id="popupDelete">
                <div className="popup__delete">
                    <button className="button button_action_close" aria-label="Cerrar ventana">
                        <img src={icon__close} className="button__close-image" alt="Cerrar ventana" />
                    </button>
                    <h3 className="popup__delete-title">¿Estás seguro?</h3>
                    <button className="popup__button" id="buttonDelete" aria-label="Si" value="true">Si</button>
                </div>
            </div> */}

            {/* Popup imagen */}
            {/* <div className="popup" id="popupImage" >
                <div className="popup__image">
                    <img className="popup__view-image"  />
                    <p className="popup__text"></p>
                    <button className="button button_action_close" aria-label="Cerrar ventana">
                        <img src={icon__close} className="button__close-image" alt="Cerrar ventana" />
                    </button>
                </div>
            </div> */}

        </CurrentUserContext.Provider>

    );

}

export default App;