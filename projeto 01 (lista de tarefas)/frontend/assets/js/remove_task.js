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
        console.log(task);
      

      let status = {
        'new': 'nova tarefa',
        'in progress': 'em progresso',
        'canceled': 'cancelado',
        'done': 'concluido'
        };  

        console.log(status)

        document.querySelector("#task_text").textContent = task.task_text;
      document.querySelector("#task_status").textContent = task.task_status;
        
       

    })
    
}
 

document.querySelector("#btn_eliminar").addEventListener("click", () => {
        console.log(`Eliminar a tarefa cujo o id = ${id_task}`);

        
    fetch(`http://localhost:3000/user/tasks/delete_task/${id_task}`)
    .then(response => {

        if(response.status === 200){
            return response.json();
        } else {
            console.log("ERRO!");
            
        }
    })  
    window.location.href = window.location.origin + "/index.html";

 
})

/* new
in progress
canceled
done 
*/
