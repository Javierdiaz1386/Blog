<script>
    import axios from 'axios'
    import NavBar from '../lib/navBar.svelte'
    let blogs =  []
    const getBlogs = ()=>{
        axios.get('http://127.0.0.1:8000/Blog/')
        .then(res=>{
            blogs= res.data
        })
    
    }
    
    getBlogs()
    
    </script>
    <NavBar />
    <div class="container-blogs">
    {#await blogs}
        Carganddo.App..
    {:then blogs} 
        {#each blogs as i }
            <div class="blogs-s">
                <h1>{i.tilte}</h1>
                <div class="xD"></div>
                <p>{i.text}</p>
            </div>
        {/each}
    {:catch err}
        {err}
    {/await}
    </div>