


document.getElementById("formregister").addEventListener("submit", async function (event) {
 
    event.preventDefault();

    const email = document.getElementById('mail').value;
    const user = document.getElementById('user').value;
    const password = document.getElementById('pass').value;
    const confirmpass = document.getElementById('confirmpass').value;


    if(password !== confirmpass){
        alert('as senhas não são iguais');
        return;
    }

    const userData = {
        mail: email,
        user: user,
        pass: password
    }

    try{
        const response = await fetch('http://127.0.0.1:3000/register', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userData)

        });

        const result = await response.text();
        alert(result);
        
    } catch (error){
        console.error("Erro", error);
        alert('ERRO AO REGISTRAR O USUARIO')
    }

    document.querySelector('#botaoreg').addEventListener("click", () => {
        setTimeout(() => { window.location.href = window.location.origin + "/index.html" }, 4 * 1000)
        })
})

