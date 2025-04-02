


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
        const response = await fetch('http://localhost:3000/register.html', {
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

    

   
})
if(salvarinfo == true){
document.querySelector('#botaoreg').addEventListener("click", () => {
    setTimeout(() => { window.location.href = window.location.origin + "/index.html" }, 4 * 1000)
    })

}


document.querySelector('#botaolog').addEventListener("click", async () => {

    const userlog = document.querySelector("#userlog").value;
    const passlog = document.querySelector("#passlog").value;


   const userdata = { userlog, passlog };

    try{
        const response = await fetch ('http://localhost:3000/index', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userdata)
        })
        const result = await response.json();
       
        if(response.status === 200){
            alert('✅' + result.message);
            window.location.href = "/pagina.html"
        } else {
            alert('❌' + result.message);
        }
    } catch (error) {
         console.error("Erro Login", error);
         alert("Erro no servidor");
    }
})