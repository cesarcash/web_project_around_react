function Card({card}){

    return (
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
    );

}

export default Card;