let intro=document.querySelector('.intro');
let logo=document.querySelector('.logo-header');
let logoSpan=document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        logoSpan.forEach((span,idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            },(idx+1)*500)
        });

        setTimeout(()=>{
            logoSpan.forEach((span,idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                },(idx+200)*50)
            })
        },9300);

        setTimeout(()=>{
            intro.style.top='-100vh';
        },8000)

        // JavaScript to redirect after 4 seconds
        setTimeout(function() {
        window.location.href = "home.html";
        }, 8000); // 4000 milliseconds = 4 seconds
    })
})