const textInsert = document.querySelector('#validation-input')

const onValid = event => {
    textInsert.classList.add('invalid')
    if (event.currentTarget.value.length === Number(textInsert.getAttribute('data-length')))
    {textInsert.classList.replace('invalid', 'valid')}}

textInsert.addEventListener('blur', onValid)
