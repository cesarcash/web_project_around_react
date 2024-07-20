import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import icon__close from '../images/icon__close.svg';

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
                  <input type="text" className="form__input" name="nameProfile" id="name-input" required placeholder="Nombre" minLength="2" maxLength="40" />
                  <span className="form__input-error name-input-error"></span>
                  <input type="text" className="form__input" name="aboutMe" id="about-input" required placeholder="Acerca de mi" minLength="2" maxLength="200" />
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
                      <input type="text" className="form__input" name="title" id="title-input" required placeholder="Título" minLength="2" maxLength="30" />
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
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
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
