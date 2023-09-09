const form = document.querySelector('form');
const layarGelap = document.querySelector('.layar-gelap');

console.log(form)
form.addEventListener('focusin', () => {
    layarGelap.style.display = 'block'
})
form.addEventListener('focusout', () => {
    layarGelap.style.display = 'none'
})