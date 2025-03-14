let id_user = null;

window.onload = () =>{
    const url = new URL(window.location.href);
    id_user = url.searchParams.get('id_user');
    console.log(id_user)
}