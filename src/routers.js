import Home from '../src/routes/Home.svelte'
import About from './routes/About.svelte'
import Blogs from './routes/Blogs.svelte'




const routes = {
    '/': Home,
    '/about': About,
    '/blogs': Blogs
}


export default routes