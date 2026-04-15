const contenitoreEmail = 'https://flynn.boolean.careers/exercises/api/random/mail';
const generatoreMail = document.querySelector('#mail');


for (let i = 0; i < 10; i++) {
    fetch(contenitoreEmail)
        .then((risposta) => {
            return risposta.json()
        })
        .then((dato) => {
            const randomMail = dato.response
            generatoreMail.innerHTML += `<li>${randomMail}</li>`
        })
}