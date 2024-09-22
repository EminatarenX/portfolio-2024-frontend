
export function useLayout(pathname: string) {
    const routes = [
        {
            path: '/',
            name: 'Sobre mi',
        },
        {
            path: '/resume',
            name: 'Resumen',
        },
        {
            path: '/portfolio',
            name: 'Portafolio',
        },
        {
            path: '/blog',
            name: 'blog',
        },
        {
            path: '/contact',
            name: 'Contacto',
        }
    ]
    const title =
    pathname === "/"
      ? "Sobre mi"
      : pathname === "/resume"
      ? "Resumen"
      : pathname === "/contact"
      ? "Contacto"
      : pathname === "/portfolio"
      ? "Portafolio"
      : "Blog";
    return {
        title,
        routes
    }
}


