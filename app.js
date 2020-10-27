const apiKey = 'P5eVJCYm13b2xZpxdDtcOMJjzAYLtY4B';

class Page{
    constructor(){
        this.apiKey = 'P5eVJCYm13b2xZpxdDtcOMJjzAYLtY4B';
        this.gifPage = document.querySelector('#gifPage');
        this.gifForm = document.querySelector('#gifForm');
        this.gifSearch = document.querySelector('#gifSearch');
        this.gifRemove = document.querySelector('#gifRemove');
        this.gifForm.addEventListener('submit', (evt) => this.handleSubmit(evt));
        this.gifRemove.addEventListener('click', (evt) => this.handleRemove(evt));
    }

    async getGif(searchValue){
        const response = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {
            q: searchValue, 
            api_key: this.apiKey,
            limit: 1  
        }});
        const url = response.data.data[0].images.original.url;
        return url;
    }

    appendGif(url){
        const newGif = document.createElement('img');
        newGif.src = url;
        newGif.classList.add('col','col-md-4', 'mb-2');
        this.gifPage.append(newGif);
    }

    removeAllGifs(evt){
        this.gifPage.innerHTML = '';
    }

    async handleSubmit(evt){
        evt.preventDefault();
        const newGifURL = await this.getGif(this.gifSearch.value);
        this.appendGif(newGifURL);
    }

    handleRemove(evt){
        this.removeAllGifs();
    }
        
}

new Page();
