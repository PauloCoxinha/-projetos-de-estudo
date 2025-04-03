document.querySelector('#botaolog').addEventListener("click", async () => {

    const userlog = document.querySelector("#userlog").value;
    const passlog = document.querySelector("#passlog").value;


   const userdata = { userlog, passlog };

    try{
        const response = await fetch ('http://localhost:3000/login', {
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

