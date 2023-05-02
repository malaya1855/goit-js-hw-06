 
const refs = {
userName: document.querySelector('#name-input'),
newName: document.querySelector('#name-output'),}
const onInputEnter = event => {   
        refs.newName.textContent = event.currentTarget.value.trim() || "Anonymous"
}

refs.userName.addEventListener('input', onInputEnter)
