
var activo = false
var contador = 0;
document.addEventListener("keypress",e=>{
if(activo){
    if(contador<45){
        console.log("codigo: "+e.key);
        if(!document.getElementById(e.key).classList.contains("eliminar")){
            contador ++;
        }
        document.getElementById(e.key).classList.add("eliminar");
        setTimeout(()=>{document.getElementById(e.key).classList.add("eliminado")},1100)
    }
    else{
        console.log("termine")
        document.getElementById(e.key).classList.add("eliminar");
        setTimeout(()=>{document.getElementById(e.key).classList.add("eliminado")},1100)
        var elmnts = document.getElementsByClassName("todos")
        console.log(elmnts)
        for(elm of  elmnts){
            elm.classList.add("eliminado")
        }
    }
}
else{
    activo=true;
    document.getElementById("contenedor").classList.add("del")
    console.log("entre")
    document.getElementById("padre").classList.remove("del")
}

})