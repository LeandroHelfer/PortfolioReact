import './Navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-white shadow p-0">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-5">
                        <a class="navbar-brand font-family text-shadow fw-bolder" href="#">Home</a>
                    </ul>
                    <span class="navbar-text">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-5">
                            <li class="nav-item px-5">
                                <a class="nav-link font-family fw-bolder" aria-current="page" href="#">Sobre Mim</a>
                            </li>
                            <li class="nav-item px-5">
                                <a class="nav-link font-family fw-bolder" href="#">Meus Projetos</a>
                            </li>
                            <li class="nav-item px-5">
                                <a class="nav-link font-family fw-bolder" href="#">Fale Comigo</a>
                            </li>
                        </ul>
                    </span>
                </div>
            </div>
        </nav>
    )
    
}

export default Navbar