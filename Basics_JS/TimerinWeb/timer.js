const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');
const output = document.querySelector('#output');
/////////////////////////////////////////////////////
let seconds = 0;  
let timerInterval;

function segundosParaHMS(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;
  
    return `${horas.toString().padStart(2,  
   '0')}:${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2,  
   '0')}`;
  }
  

start.addEventListener('click', ()=>{
    timerInterval = setInterval(() => {
        seconds++;
       output.textContent = `${segundosParaHMS(seconds)}`;
      }, 1000);
      start.disabled = true;
      reset.disabled = false;
      pause.disabled = false;
});

pause.addEventListener('click', () => {
    clearInterval(timerInterval);
    start.disabled = false;
    pause.disabled = true;
  });

reset.addEventListener('click',()=>{
    seconds = 0;
    clearInterval(timerInterval);
    output.textContent = `${segundosParaHMS(seconds)}`;
    start.disabled = false;
    pause.disabled = true;
    reset.disabled = true
})

