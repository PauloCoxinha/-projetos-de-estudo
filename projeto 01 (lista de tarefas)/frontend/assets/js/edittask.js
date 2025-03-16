let id_task = null; 

window.onload = () =>  {
    const url = new URL(window.location.href);
    id_task = url.searchParams.get('id_task');

            
    

    fetch(`http://localhost:3000/user/tasks/get_task/${id_task}`)
    .then(response => {

        if(response.status === 200){
            return response.json();
        } else {
            console.log("ERRO!");
            
        }
    })  

    .then(task => {

        document.querySelector("#text_task_text").value = task.task_text;
       

    })

}

let task_text = document.querySelector("#text_task_text").value.trim();

document.querySelector("#btn_atualizar").addEventListener('click', () => {

    let task_text = document.querySelector("#text_task_text").value.trim();
    

    if(task_text.length === 0 || task_text == null || task_text.content == ""){
        alert("isn't possible to save a task without a name");
        return;
    } else if (task_text.length > 100) {
        alert("text of task is large, please change the name or delete the task")
        return;
    } 



  //updatetask in database 

    
  fetch(`http://localhost:3000/user/tasks/updated_task`, {
    method: 'POST', 
    headers: {'Content-type' : 'application/json'},
    body: JSON.stringify({id_task, task_text})
})
.then(response => {

    if(response.status === 200){
        return response.json();
    }

   
})  

 //redirect to homepage
 window.location.href = window.location.origin + "/index.html"; 
})







