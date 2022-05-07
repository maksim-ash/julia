const openPopUp=document.getElementById('open_pop_up');
const openPopUp_2=document.getElementById('open_pop_up_2');
const openPopUp_3=document.getElementById('open_pop_up_3');
const openPopUp_4=document.getElementById('open_pop_up_4');
const openPopUp_5=document.getElementById('open_pop_up_5');
const openPopUp_6=document.getElementById('open_pop_up_6');

const closePopUp=document.getElementById('pop_up_close');
const closePopUp_2=document.getElementById('pop_up_close_2');
const closePopUp_3=document.getElementById('pop_up_close_3');
const closePopUp_4=document.getElementById('pop_up_close_4');
const closePopUp_5=document.getElementById('pop_up_close_5');
const closePopUp_6=document.getElementById('pop_up_close_6');

const popUp=document.getElementById('pop_up');
const popUp_2=document.getElementById('pop_up_2');
const popUp_3=document.getElementById('pop_up_3');
const popUp_4=document.getElementById('pop_up_4');
const popUp_5=document.getElementById('pop_up_5');
const popUp_6=document.getElementById('pop_up_6');

const body = document.querySelector('body');

openPopUp.addEventListener('click',function(e){
    e.preventDefault();
    popUp.classList.add('active');
    body.classList.toggle('lock');
})
closePopUp.addEventListener('click',()=>{
    popUp.classList.remove('active');
    body.classList.remove('lock');
})


openPopUp_2.addEventListener('click',function(e){
    e.preventDefault();
    popUp_2.classList.add('active');
    body.classList.toggle('lock');
})
closePopUp_2.addEventListener('click',()=>{
    popUp_2.classList.remove('active');
    body.classList.remove('lock');
})


openPopUp_3.addEventListener('click',function(e){
    e.preventDefault();
    popUp_3.classList.add('active');
    body.classList.toggle('lock');
})
closePopUp_3.addEventListener('click',()=>{
    popUp_3.classList.remove('active');
    body.classList.remove('lock');
})


openPopUp_4.addEventListener('click',function(e){
    e.preventDefault();
    popUp_4.classList.add('active');
    body.classList.toggle('lock');
})
closePopUp_4.addEventListener('click',()=>{
    popUp_4.classList.remove('active');
    body.classList.remove('lock');
})


openPopUp_5.addEventListener('click',function(e){
    e.preventDefault();
    popUp_5.classList.add('active');
    body.classList.toggle('lock');
})
closePopUp_5.addEventListener('click',()=>{
    popUp_5.classList.remove('active');
    body.classList.remove('lock');
})


openPopUp_6.addEventListener('click',function(e){
    e.preventDefault();
    popUp_6.classList.add('active');
    body.classList.toggle('lock');
})
closePopUp_6.addEventListener('click',()=>{
    popUp_6.classList.remove('active');
    body.classList.remove('lock');
})
