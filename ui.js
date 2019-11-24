function UI() {
    this.outputImage=document.getElementById("outputImage");
    this.outputLanguage=document.getElementById("outputLanguage");
    this.outputWord=document.getElementById("outputWord");
    this.languageList=document.getElementById("language");

}

UI.prototype.changeUI=function(){
    this.outputImage.src=`images/${this.languageList.value}.png`;
    this.outputLanguage.innerHTML=this.languageList.options[this.languageList.selectedIndex].textContent;
}

UI.prototype.displayTranslate=function(response){
    this.outputWord.innerText=response;
}