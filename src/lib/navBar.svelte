<script>
    import { link } from 'svelte-spa-router'
</script>



<nav>
    <ul>
        <li><a href="/" use:link>Home</a></li>
        <li><a href="/blogs" use:link>Blogs</a></li>
        <li><a href="/about" use:link>About</a></li>
        
    </ul>
</nav>