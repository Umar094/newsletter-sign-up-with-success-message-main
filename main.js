const dismisButton = document.querySelector('.dismisButton')
const form = document.getElementById('form')
const successMessage = document.querySelector('.success')
const errorText = document.querySelector('.errorText')
const input = document.getElementById('email')
const emailCheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

dismisButton.addEventListener('click', ()=>{
    successMessage.classList.toggle('hidden')
})

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    const emailValue = document.getElementById('email').value
    const emailValueStatus = emailCheck.test(emailValue)


    console.log(emailValueStatus)
    if(emailValue === null || emailValue === ''){

        errorText.classList.remove('hidden')
        input.classList.add('errorInput')

        setTimeout(()=>{
            errorText.classList.add('hidden')
            input.classList.remove('errorInput')
        }, 3000)


    }else if(!emailValueStatus){

        errorText.classList.remove('hidden')
        input.classList.add('errorInput')

        setTimeout(()=>{
            errorText.classList.add('hidden')
            input.classList.remove('errorInput')
        }, 3000)

    }else{
        const email = document.getElementById('emailValue')
        email.innerText = emailValue
        successMessage.classList.remove('hidden')

    }

})

