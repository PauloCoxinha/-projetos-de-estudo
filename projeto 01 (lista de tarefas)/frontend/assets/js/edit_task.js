let id_user = null;

window.onload = () =>{
    const url = new URL(window.location.href);
    id_user = url.searchParams.get('id_user');
    console.log(id_user)
}

document.querySelector("#btn_guardar").addEventListener("click", () =>{
    let task_text = document.querySelector("#text_task_text").value.trim();

    

    if(task_text.length === 0 || task_text == null || task_text.content == ""){
        alert("isn't possible to save a task without a name");
        return;
    } else if (task_text.length > 100) {
        alert("text of task is large, please change the name or delete the task")
        return;
    }

    

    //stores new task in database 

    
    fetch(`http://localhost:3000/user/tasks/new_task`, {
        method: 'POST', 
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify({id_user, task_text})
    })
    .then(response => {

        if(response === 200){
            return response.json();
        }
    })  

    // redirect to homepage
    window.location.href = window.location.origin + "/index.html"; 
} )