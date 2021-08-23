const $button = document.querySelector('.send')
const $errorText = document.querySelector('.errorText')

$button.addEventListener('click', () => {

    $errorText.classList.add('show');

    setTimeout(() => {
        $errorText.classList.remove('show');
    }, 3000);
})