


const salvarinfo = document.getElementById("formregister").addEventListener("submit", async function (event) {
 
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
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userData)

        });

        const result = await response.text();
        alert(result);

        if(response.ok){
        
            setTimeout(() => {
                window.location.href = window.location.origin + "/login.html"
            }, 2 * 1000)
        
        }
        
    } catch (error){
        console.error("Erro", error);
        alert('ERRO AO REGISTRAR O USUARIO')
    }

})
    
   








