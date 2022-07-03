// intro type effect using typed js library.

// const typed = select('.typed');
// if(typed){
//     let typed_strings = typed.getAttribute("data-typed-item");
//     typed_strings = typed_strings.split(",");
//     new Typed('.typed', {
//         strings: typed_strings,
//         loop:true,
//         typeSpeed: 100,
//         backSpeed:50,
//         backDelay: 2000
//     });
// }


// typerwriter cdn link its working fine
{/* <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script> */}

var app = document.getElementById('app');
app.innerHTML = "amanjeet";

var typewriter = new Typewriter(app, {
    loop: true
});



typewriter.typeString('Welcome to My Website.')
    .pauseFor(2500)
    .deleteAll()
    .typeString("I'm a <strong> Web Developer..</strong>")
    .pauseFor(2500)
    .deleteChars(12)
    .typeString('<strong> Designer..</strong>')
    .pauseFor(2500)
    .deleteChars(17)
    .typeString("<strong>an Engineer..</strong>")
    .deleteChars(14)
    .pauseFor(2500)
    .typeString("<strong> a Photographer.</strong>")
    .pauseFor(2500)
    .start();




// scrool effect 

window.addEventListener('load', () => {
    if(window.location.hash){
        if(select(window.location.hash)){
            scrollTo(window.location.hash);
        }
    }
})