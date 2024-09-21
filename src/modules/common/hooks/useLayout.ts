
export function useLayout(pathname: string) {
    const routes = [
        {
            path: '/',
            name: 'about',
        },
        {
            path: '/resume',
            name: 'resume',
        },
        {
            path: '/portfolio',
            name: 'portfolio',
        },
        {
            path: '/blog',
            name: 'blog',
        },
        {
            path: '/contact',
            name: 'contact',
        }
    ]
    const title =
    pathname === "/"
      ? "about"
      : pathname === "/resume"
      ? "Resume"
      : pathname === "/contact"
      ? "Contact"
      : pathname === "/portfolio"
      ? "Portfolio"
      : "Blog";
    return {
        title,
        routes
    }
}


