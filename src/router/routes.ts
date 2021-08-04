import Home from "_pages/home/index.tsx"
import About from "_pages/about/index.tsx"
const routes = [
    {
        path: '/',
        redirect: '/home',
        exact: true
    },
    {
        path: '/home',
        comp: Home
    },
    {
        path: '/login',
        comp: About
    }
]

export default routes