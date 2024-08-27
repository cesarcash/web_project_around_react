import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({card,onCardClick}){
    // console.log("🚀 ~ Card ~ card:", card)

    const currentUser = useContext(CurrentUserContext);
    // console.log("🚀 ~ Card ~ currentUser:", currentUser)

    function handleClick() {
        onCardClick(card);
    } 

    // const isOwn = card.

    return (
        <section className="post__item">
            <div className="post__image-container" >
                <button className="button button_action_delete" aria-label="Eliminar post"></button>
                <img className="post__image" src={card.link} onClick={handleClick} />
            </div>
            <div className="post__description">
                <h2 className="post__name">{card.name}</h2>
                <div className="post__details">
                    <button className="button button_action_like" aria-label="Me gusta"></button>
                    <span className="post__likes">{card.likes.length}</span>
                </div>
            </div>
        </section>
    );

}

export default Card;