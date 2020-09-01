const uls = document.querySelector('.ul-upper');
const sections = document.querySelectorAll('section');

for(let i = 1;i <= sections.length;i++) {
    const link = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.classList.add("list");
    anchor.textContent = "Section " + i;
    anchor.setAttribute('href','#section' + i);
    link.appendChild(anchor);
    uls.appendChild(link);
}

const links = document.querySelectorAll('.ul-upper a');
    links.forEach( function(item) {
    item.addEventListener('click',func);
})

    function func(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const offset = document.querySelector(href).offsetTop;
        
        scroll({
            top:offset,
            behavior:'smooth'
        })
    }