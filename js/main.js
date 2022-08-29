window.addEventListener('load', () => {

    const burger = document.querySelector('.contain-burgerNclose-burger');
    const nav = document.querySelector('header .contain-nav');
    const ul = document.querySelector('header .contain-nav-ul');
    const close = document.querySelector('.contain-burgerNclose-close');
    const main = document.querySelector('main');
    const header = document.querySelector('header');

    mostrarNav( window.screen.width );
    // nav.style.height = '0px';

    burger.addEventListener('click',() => {
        console.log('click');
        nav.style.visibility = 'visible';
        ul.style.visibility = 'visible';
        ul.style.filter = 'opacity(1)';
        burger.style.display = 'none';
        nav.style.height = '270px';
        close.style.display = 'block';
        header.style.boxShadow =  'rgb(45 49 77 / 90%) 0px -340px 420px 701px';

    })

    close.addEventListener('click', () => {
        nav.style.visibility = 'hidden';
        ul.style.visibility = 'hidden';
        ul.style.filter = 'opacity(0)';
        burger.style.display = 'block';
        close.style.display = 'none';
        nav.style.height = '0px';
        header.style.boxShadow =  'none';
    })


    function mostrarNav( width ) {
        console.log(width);
        if( width > 786 ){
            nav.style.visibility = 'visible';
            nav.style.height = 'inherit';
            header.style.boxShadow =  'none';
            burger.style.display = 'none';
            close.style.display = 'none';
            ul.style.visibility = 'visible';
            ul.style.filter = 'opacity(1)';
        } else {
            nav.style.visibility = 'hidden';
            ul.style.visibility = 'hidden';
            burger.style.display = 'block';
            close.style.display = 'none';
            // ul.style.filter = 'opacity(0)';
        }
    }

    window.addEventListener('resize', () => {
        mostrarNav( window.screen.width );
    })

})