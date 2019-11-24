function Translate(word, language) {
    this.apikey = "trnsl.1.1.20191124T153935Z.96d8d74404d21f7c.ebae69f17a466fe20033732750147a0e42a56704";
    this.word = word;
    this.language = language;
    
    this.xhr = new XMLHttpRequest();

}


Translate.prototype.translateWord = function (callback) {
    const enpoint=`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
    this.xhr.open("GET",enpoint,true);
    
    this.xhr.onload = () =>{
        if(this.xhr.status===200){
            const json=JSON.parse(this.xhr.responseText);
            const text=json.text[0];

            callback(null,text);
        }else{
            callback("bir hata oluştu",null);
        }
    }

    this.xhr.send();
};
Translate.prototype.changeParameteres = function (newWord,newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}