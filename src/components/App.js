import logo from './images/logo__white.png';
import icon__edit from './images/icon__edit.svg';
import icon__close from './images/icon__close.svg';
import icon__add from './images/add.png';


function App() {
  return (
    <>
      <div className="popup" id="popupPhoto">
        <div className="popup__delete">
            <button className="button button_action_close" aria-label="Cerrar ventana">
                <img src={icon__close} className="button__close-image" alt="Cerrar ventana" />
            </button>
            <form id="formEditPhoto" name="form" className="form">
                <h3 className="form__title">Cambiar foto de perfil</h3>
                <input type="url" className="form__input" name="avatar" id="url-photo" required placeholder="Enlace a la imagen" />
                <span className="form__input-error url-photo-error"></span>
                <button type="submit" className="form__button" aria-label="Guardar">Guardar</button>
            </form>
        </div>
      </div>
      <div className="popup" id="popupDelete">
          <div className="popup__delete">
              <button className="button button_action_close" aria-label="Cerrar ventana">
                  <img src={icon__close} className="button__close-image" alt="Cerrar ventana" />
              </button>
              <h3 className="popup__delete-title">¿Estás seguro?</h3>
              <button className="popup__button" id="buttonDelete" aria-label="Si" value="true">Si</button>
          </div>
      </div>
      <div className="popup" id="popupImage" >
          <div className="popup__image">
              <img className="popup__view-image"  />
              <p className="popup__text"></p>
              <button className="button button_action_close" aria-label="Cerrar ventana">
                  <img src={icon__close} className="button__close-image" alt="Cerrar ventana" />
              </button>
          </div>
      </div>
      <div className="popup" id="popupEdit">
          <div className="popup__form">
              <button className="button button_action_close" aria-label="Cerrar ventana">
                  <img src={icon__close} className="button__close-image" alt="Cerrar ventana" />
              </button>
              <form id="formEditProfile" name="form" className="form">
                  <h3 className="form__title">Editar perfil</h3>
                  <input type="text" className="form__input" name="nameProfile" id="name-input" required placeholder="Nombre" minlength="2" maxlength="40" />
                  <span className="form__input-error name-input-error"></span>
                  <input type="text" className="form__input" name="aboutMe" id="about-input" required placeholder="Acerca de mi" minlength="2" maxlength="200" />
                  <span className="form__input-error about-input-error"></span>
                  <button type="submit" className="form__button" aria-label="Guardar">Guardar</button>
              </form>
          </div>
      </div>
      <div className="popup" id="popupAdd">        
          <div className="popup__form">
              <button className="button button_action_close" aria-label="Cerrar ventana">
                  <img src={icon__close} className="button__close-image" alt="Cerrar ventana" />
              </button>
              <div className="popup__content" id="popupContent">
                  <form id="formNewPost" name="form" className="form">
                      <h3 className="form__title">Nuevo lugar</h3>
                      <input type="text" className="form__input" name="title" id="title-input" required placeholder="Título" minlength="2" maxlength="30" />
                      <span className="form__input-error title-input-error"></span>
                      <input type="url" className="form__input" name="url" id="url-input" required placeholder="Enlace a la imagen" />
                      <span className="form__input-error url-input-error"></span>
                      <button type="submit" className="form__button" aria-label="Crear">Crear</button>
                  </form>
              </div>
          </div>
      </div>
      <div className="page">
          <div className="page__container">
              <header className="header">
                  <img src={logo} alt="Alrededor del mundo" className="header__logo" />
              </header>            
              <div className="user">
                  <div className="user__picture">
                      <div className="user__picture-edit"></div>
                      <img className="user__photo" />
                  </div>
                  <div className="user__data">
                      <div className="user__data-row">
                          <h1 className="user__name-profile" id="userName"></h1>
                          <button id="button__edit" className="button button_action_edit" aria-label="Editar perfil">
                              <img src={icon__edit} alt="Editar perfil" className="button__edit-image" />
                          </button>
                      </div>
                      <p className="user__name-description" id="userDescription"></p>
                  </div>
                  <div className="user__action">
                      <button id="button__add" className="button button_action_add" aria-label="Añadir post">
                          <img src={icon__add} alt="Añadir post" className="button__add-image" />
                      </button>
                  </div>
              </div>
              <main className="post" id="post"></main>
              <footer className="footer">
                  <p className="footer__author">&copy; 2024 @cesarcash</p>
              </footer>
          </div>
      </div>
      <template id="postTemplate">
          <section className="post__item">
              <div className="post__image-container">
                  <button className="button button_action_delete" aria-label="Eliminar post"></button>
                  <img className="post__image"  />
              </div>
              <div className="post__description">
                  <h2 className="post__name"></h2>
                  <div className="post__details">
                      <button className="button button_action_like" aria-label="Me gusta"></button>
                      <span className="post__likes"></span>
                  </div>
              </div>
          </section>
      </template>
    </>
  );
}

export default App;
