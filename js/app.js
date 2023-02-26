function requete(fichier){
    var demo = document.getElementById("demo");
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            demo.innerHTML = this.responseText ;
            //var data = this.response ;
            //var utilisateurs = data.utilisateurs ;
        
            //for (var i = 0 ; i < utilisateurs.length; i++)
            //{
            //    demo.innerHTML += utilisateurs[i].prenom + " ("+ utilisateurs[i].age +") " ;
            //}
        }else if (this.readyState == 4 && this.status == 404) {
            alert('Erreur 404 gros nullos') ;
        } 
    };

    // GET récupérer du contenu POST envoyer du contenu 
    xhr.open("GET", "async/"+fichier, true);
    xhr.responseType = "text" ;
    xhr.send();
}

document.getElementById("form_req").addEventListener("submit",function(e)
{
    e.preventDefault();

    var fichierARecuperer = document.getElementById("input_fichier").value ;
    console.log(fichierARecuperer);
    requete(fichierARecuperer);
    
    return false ;
});