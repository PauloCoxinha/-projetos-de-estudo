let id_user = null;

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
        console.log(task);
      document.querySelector("#task_text").textContent = task.task_text;
      
       

    })
    
}