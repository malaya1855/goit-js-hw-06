const textInsert = document.querySelector('#validation-input')

textInsert.addEventListener('blur', onValid)
function onValid(event)  {
    textInsert.classList.add('invalid')
    if (event.currentTarget.value.length <= Number(textInsert.getAttribute('data-length')))
{textInsert.classList.replace('invalid', 'valid')}
}

