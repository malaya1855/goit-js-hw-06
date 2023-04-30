const textInsert = document.querySelector('#validation-input')

const onValid = event => {
    // event.currentTarget.value.trim();
    textInsert.classList.add('invalid')
    if (event.currentTarget.value.trim().length === Number(textInsert.getAttribute('data-length')))
    {textInsert.classList.replace('invalid', 'valid')}}

textInsert.addEventListener('blur', onValid)
