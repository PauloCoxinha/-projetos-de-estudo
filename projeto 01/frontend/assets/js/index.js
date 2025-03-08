    // javascript do index.html 
    console.log('index.js ffoi carregado!');

   let id = 1;
    

    window.onload = async () => {
        
       await get_username(id);
       await get_user_task(id);


    }

// -----------------------------------------------------------------------------------------


    async function get_username(id) {
    
        try {
            const response = await fetch(`http://localhost:3000/user/${id}`);
            console.log("Resposta da API:", response); // Debug
    
            if (!response.ok) {
                throw new Error(`Erro ${response.status}: ${response.statusText}`);
            }
    
            const dados = await response.json();
            console.log("Dados recebidos:", dados); // Debug
    
            if (dados.username) {
                document.querySelector('#username').textContent = dados.username;
            } else {
                console.error("Nenhum nome de usuário encontrado nos dados recebidos.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    }


    // -----------------------------------------------------------------------------------------


    async function get_user_task(id) {
        try {
            const response = await fetch(`http://localhost:3000/user/${id}/tasks`);
    
            if (!response.ok) {
                throw new Error(`Erro ${response.status} : ${response.statusText}`);
            }
    
            const tarefas = await response.json();
    
            let html = ''; // Definindo html antes do loop
    
            if (tarefas.length === 0) {
                document.querySelector('#no_tasks').classList.remove('d-none');
                document.querySelector("#total_tasks").classList.add('d-none');
            } else {
                document.querySelector('#no_tasks').classList.add('d-none');
                document.querySelector("#tasks_container").innerHTML = '';


                let colors = [
                    {
                        task_status: 'new', select_bg_color: 'bg-white'
                        

                    },

                    {
                        task_status: 'in progress', select_bg_color: 'bg-info'
                        

                    },

                    {
                        task_status: 'canceled', select_bg_color: 'bg-danger'
                        

                    },

                    {
                        task_status: 'done', select_bg_color: 'bg-success'
                        

                    },
                ];
    
                tarefas.forEach(tarefa => {

                    let color = colors.find(item => item.task_status == tarefa.task_status)    
                    console.log(color);    

                    console.log("Tarefa do usuário:", tarefa);
                    
                    
    
                    html += `<div class="row mb-3">
                        <div class="col-12 border border-secondary rounded p-3 shadow">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <div class="d-flex align-items-center position-relative">
                                        <h5 class="me-3 text-info">
                                            <i class="fa-solid fa-circle-chevron-right"></i>
                                        </h5>
                                        <h5>${tarefa.task_text || "Sem título"}</h5>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <select id="task_status_${tarefa.id}" onchange="change_task_status(${tarefa.id})" class="form-select p-2 ${color.select_bg_color}">
                                        <option class="bg-white" value="new" ${tarefa.task_status === 'new' ? "selected" : ""}>New</option>
                                        <option class="bg-info" value="in progress" ${tarefa.task_status === "in progress" ? "selected" : ""}>In Progress</option>
                                        <option class="bg-danger" value="canceled" ${tarefa.task_status === "canceled" ? "selected" : ""}>Canceled</option>
                                        <option class="bg-success" value="done" ${tarefa.task_status === "done" ? "selected" : ""}>Done</option>
                                    </select>
                                </div>
                                <div class="col-1 text-end"> <span class="edit_link" onclick= "edit_task(${tarefa.id})">
                                    <i class="fa-solid fa-pen-to-square me-1"></i> Edit </span>
                                </div>
                                <div class="col-1 text-end"> <span class="delete_link" onclick="delete_task(${tarefa.id})">
                                    <i class="fa-solid fa-trash me-2"></i> Delete </span>
                                </div>
                            </div>
                        </div>
                    </div>`;
                
                    document.querySelector("#tasks_container").innerHTML = html;


            });
                document.querySelector("#total_tasks").classList.remove('d-none');
                document.querySelector("#total_tasks > div > h4 > span").textContent = tarefas.length 


                 
            }
            
        } catch (error) {
            console.error("Erro ao buscar tarefas:", error);
        }
    }


    function edit_task(id_task){
        console.log(id_task);
    }

    function delete_task(id_task){
        console.log(id_task)
    }
  
    function change_task_status(id_task){
        console.log(id_task)

        let value = document.querySelector("#task_status_" + `${id_task}`).value;
        console.log(value)
    }


    /*
    id_user
    id_task
    status

    */


            
    
    
            
    
