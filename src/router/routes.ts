import Home from "_pages/home/index.tsx"
const routes = [
    {
        path: '/',
        redirect: '/home',
        exact: true
    },
    {
        path: '/home',
        comp: Home
    }
]

export default routes