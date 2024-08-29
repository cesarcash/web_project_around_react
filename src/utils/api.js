import {configHeaders} from './constants';

class Api {

    constructor({headers}){
        this._headers = headers;
    }

    getInitialCards(urlCards){

        return fetch(urlCards,{
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': this._headers.type
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status} `) )

    }

    getInfoUser(urlUser){

        return fetch(urlUser, {
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': this._headers.type
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status} `) )        

    }

    editInfoUser({nameProfile,aboutMe},url){
        
        return fetch(url, {
            method: 'PATCH',
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': this._headers.type
            },
            body: JSON.stringify({
                name: nameProfile,
                about: aboutMe
            })
        })
        .then(res => res.ok? res.json() : Promise.reject(`Error: ${res.status} `) )

    }

    setNewCard({title,url}, urlCards){
        
        return fetch(urlCards,{
            method: 'POST',
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': this._headers.type
            },
            body: JSON.stringify({
                name: title,
                link: url
            })
            
        })
        .then(res => res.ok? res.json() : Promise.reject(`Error: ${res.status} `) )

    }

    // deleteCard(url){
        
    //     return fetch(url, {
    //         method: 'DELETE',
    //         headers: {
    //             authorization: this._headers.authorization,
    //             'Content-Type': this._headers.type
    //         }
    //     })
    //    .then(res => res.ok? res.json() : Promise.reject(`Error: ${res.status} `) )

    // }

    async deleteCard(url){

        const {authorization,type} = this._headers;

        try {

            const response = await fetch(url,{
    
                method: 'DELETE',
                headers: {
                    authorization,
                    'Content-type': type
                }
    
            })

            if(!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            return await response.json();

        } catch (error) {
            console.error(error)
        }

    }

    addLikeCard(url){

        return fetch(url,{
            method: 'PUT',
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': this._headers.type
            }
        })
       .then(res => res.ok? res.json() : Promise.reject(`Error: ${res.status} `) )

    }

    removeLikeCard(url){

        return fetch(url,{
            method: 'DELETE',
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': this._headers.type
            }
        })
       .then(res => res.ok? res.json() : Promise.reject(`Error: ${res.status} `) )

    }

    async changeLikeCardStatus(url,isLiked){

        const {authorization, type} = this._headers;

        try {

            const response = await fetch(url,{
                method: (isLiked) ? 'PUT' : 'DELETE',
                headers: {
                    authorization,
                    'Content-Type': type
                }
            });

            if(!response.ok){
                throw new Error(`Error ${response.status}`);
            }

            return await response.json();

        } catch (error) {
            console.error(error)
        }

    }

    editImgUser(url,avatar){

        return fetch(url, {
            method: 'PATCH',
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': this._headers.type
            },
            body: JSON.stringify({
                avatar: avatar
            })
        })
        .then(res => res.ok? res.json() : Promise.reject(`Error: ${res.status} `) )

    }

}

const api = new Api({
    headers: {
      authorization: configHeaders.token,
      type: configHeaders.type
    }
});

export default api;