<script>
import axios from 'axios'





const sendPost = ()=>{
    let datos = document.getElementById('formm')
    axios.post('http://127.0.0.1:8000/Blog/', new FormData(datos))
    .then(res=>{
        console.log(res.data)
    })

}

</script>

<main>
<form id="formm" method="POST">
    <input id="user_owern" name='user_owern' type="text">
    <input id="tilte" name="tilte" type="text">
    <input id="text" name="text" type="text">
    <button on:click|preventDefault={sendPost}>Enviar</button>


</form>
<!-- Prueba -->
</main>