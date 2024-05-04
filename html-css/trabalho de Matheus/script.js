const listaselect = document.getElementById ('listaselect');

listaselect.addEventListener('change' , function() {
    if (listaselect.value !== "") {
        alert("você selecionou: " + listaselect.value + ", para ver esse produto veja a nossa aba principal");
    }
} )