let btn = document.querySelectorAll(".btn");
let write = document.querySelector("#write");
btn[0].addEventListener('click', () => {
    write.innerHTML = "";
})
btn[1].addEventListener('click', () => {
    // write.;
})
btn[2].addEventListener('click', () => {
    write.append('%');
})
btn[3].addEventListener('click', () => {
    write.append('/');
})
btn[4].addEventListener('click', () => {
    write.append('7');
})
btn[5].addEventListener('click', () => {
    write.append('8');
})
btn[6].addEventListener('click', () => {
    write.append('9');
})
btn[7].addEventListener('click', () => {
    write.append('*');
})
btn[8].addEventListener('click', () => {
    write.append('4');
})
btn[9].addEventListener('click', () => {
    write.append('5');
})
btn[10].addEventListener('click', () => {
    write.append('6');
})
btn[11].addEventListener('click', () => {
    write.append('-');
})
btn[12].addEventListener('click', () => {
    write.append('1');
})
btn[13].addEventListener('click', () => {
    write.append('2');
})
btn[14].addEventListener('click', () => {
    write.append('3');
})
btn[15].addEventListener('click', () => {
    write.append('+');
})
btn[16].addEventListener('click', () => {
    write.append('0');
})
btn[17].addEventListener('click', () => {
    write.append('.');
})
btn[18].addEventListener('click', () => {
    // write.innerHTML='=';
    write.innerHTML=eval(write.innerHTML);
   console.log(write.innerHTML)
   console.log(eval(write.innerHTML))
   
})