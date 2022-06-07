const loader = document.querySelector('#preloader');
const fullpage = document.querySelector('#fullpage');

const body = document.querySelector('body');

window.addEventListener('load', function() {

   body.style.overflow ='hidden';
   fullpage.style.visibility = 'hidden';
   setTimeout(load,1800)

})


function load() {
   body.style.overflow ='auto';
   loader.style.display = 'none';
   fullpage.style.visibility = 'visible';
}

 
