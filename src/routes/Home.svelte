<script>
    import { link } from 'svelte-spa-router'
    import NavBar from '../lib/navBar.svelte'
</script>

<NavBar />
<div class="container-home">
    <h1 class="titulo-home">BIENVENIDOS A UN BLOG CHOTO</h1>
    <a href="/blogs" use:link class="button-home">Ingresar-></a>
</div>
