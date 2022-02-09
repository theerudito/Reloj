
// DIAS
let hours = document.getElementById("horas")
let minutes = document.getElementById("minutos")
let seconds = document.getElementById("segundos")
// FECHA
let datos = document.getElementById("dia")
// let date = document.getElementById("fecha")
// let month = document.getElementById("mes")
// let year = document.getElementById("año")

const mostrarHora = () => {
  let timer = new Date()
  //console.log(timer);
  let horas = timer.getHours()
  //console.log(horas);  
  let minutos = timer.getMinutes()
  //console.log(minutos);  
  let segundos = timer.getSeconds()
  //console.log(segundos);
  
  hours.innerHTML = String(horas).padStart(2, "0")
  minutes.innerHTML = String(minutos).padStart(2, "0")
  seconds.innerHTML = String(segundos).padStart(2, "0")
  
  setTimeout(mostrarHora, 1000)
}

const mostrarFecha = () => {
 let dates = new Date()
 let dias = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
 let meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio",
                        "Agosto","Septiembre","Octubre","Noviembre","Diciembre");
let dia = dias[dates.getDay()] 
console.log(dia);
let fecha =  dates.getDate() 
console.log(fecha)
let mes = meses[dates.getMonth()] 
console.log(mes);
let año = dates.getFullYear()
console.log(año);

  datos.innerHTML = String(`${dia} ${fecha} ${mes} ${año}`)
  // date.innerHTML = String(fecha)
  // month.innerHTML = String(mes)
  // year.innerHTML = String(año)
}

mostrarHora()
mostrarFecha()