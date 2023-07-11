let cantidaddeMilanesasMias
 let pablitoCome=false


function comer(cantidaddeMilanesasMias, pablitoCome )
{
    if (pablitoCome==true & cantidaddeMilanesasMias ==0)
    {
     return      console.log("cuantos sopapos se va a comer pablito?")
    }

}
            
comer(0, true)

let inicial=1000
 let pesofinal=prompt("ingrese el peso final")
let pasante=0

 let humedad=inicial - pesofinal
 let enporcentage= (humedad / pesofinal) *100 
 console.log("la cantidad agua  de la muestra es :" + humedad)
 console.log("el porcentage de humedad de la muestra es :" + enporcentage)
 

  let retenido=prompt("ingrese el retenido en gr de la muestra: ")

  function tamizado( pesofinal,retenido){
    let pesopasante=pesofinal-retenido
    let pasante=  (retenido/pesopasante)*100
    return pasante  

  }

 console.log(tamizado(pesofinal,retenido))
let  nombre
let apel
let socio
 do {
   nombre=prompt("ingrese el nombre")
 nsocio=prompt("ingrese el numero de socio:")
 } while ( nombre==="ESC" || socio==="ESC")
 {
  console.log( "buenos dias, " +nombre)
 }
