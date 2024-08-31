import {configHeaders,url} from './constants';

class Api {

    constructor({headers,url}){
        this._headers = headers;
        this._url = url;
    }

    async getInitialCards(){

        const {authorization,type} = this._headers;
        const url = this._url+'cards';

        try{

            const response = await fetch(url,{
                headers: {
                    authorization,
                    'Content-Type': type
                }
            })

            if(!response.ok){
                throw new Error(`Error: ${response.status}`)
            }

            return await response.json();

        }catch(error){
            console.error(error)
        }

    }

    async getInfoUser(){
        
        const {authorization,type} = this._headers;
        const url = this._url+'users/me';
        
        try {

            const response = await fetch(url,{
                headers: {
                    authorization,
                    'Content-Type': type
                }
            })

            if(!response.ok){
                throw new Error(`Error: ${response.status}`);
            }

            return await response.json();

        }catch(error){
            console.error(error);
        }
    }

    async setUserInfo({name,about}){

        const {authorization,type} = this._headers;
        const url = this._url+'users/me';

        try {

            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    authorization,
                    'Content-Type': type
                },
                body: JSON.stringify({
                    name: name,
                    about: about
                })
            })

            if(!response.ok){
                throw new Error(`Error: ${response.status}`);
            }

            return await response.json();

        } catch (error) {
            console.error(error);
        } 

    }

    async setNewCard({title,url}){
        
        const {authorization,type} = this._headers;
        const urlCards = this._url+'cards';
        
        try {

            const response = await fetch(urlCards,{
                method: 'POST',
                headers: {
                    authorization,
                    'Content-Type': type
                },
                body: JSON.stringify({
                    name: title,
                    link: url
                })
            })

            if(!response.ok){
                throw new Error(`Error: ${response.status}`);
            }

            return await response.json();

        }catch(error){
            console.error(error);
        }

    }

    async deleteCard(idCard){

        const {authorization,type} = this._headers;
        const url = this._url+'cards/'+idCard;

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

    async changeLikeCardStatus(idCard,isLiked){

        const {authorization, type} = this._headers;
        const url = this._url+'cards/likes/'+idCard;

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

    async editImgUser({avatar}){

        const {authorization,type} = this._headers;
        const url = this._url+'users/me/avatar';

        try {

            const response = await fetch(url,{
                method: 'PATCH',
                headers: {
                    authorization,
                    'Content-type': type
                },
                body: JSON.stringify({
                    avatar: avatar
                })
            })

            if(!response.ok){
                throw new Error(`Error: ${response.status}`);
            }

            return await response.json();

        }catch(error){
            console.error(error)
        }

    }

}

const api = new Api({
    headers: {
      authorization: configHeaders.token,
      type: configHeaders.type
    },
    url
});

export default api;