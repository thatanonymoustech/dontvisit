function clickkk() {
    let butt = document.querySelector('button');
    butt.style.width = '300px';
    butt.style.height = '90px';
    butt.innerHTML = "Please Don't move pointer out of this Box";
    butt.style.letterSpacing = '1px';
    let bodyHtml = document.querySelector('body');
    bodyHtml.style.cursor = 'url(pointer.cur),auto';
}