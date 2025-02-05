import 'C:/Users/My-Pc/Desktop/bootsrap-project/src/App.css'
const Home = () => {
    return (
        <>  {/* NAVBAR */}
            <header>
                <nav class="navbar navbar-expand-lg navbar-dark bg-black">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#" style={{ fontWeight: "bold" }}>CAR</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Accueil</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Nos voitures</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" aria-disabled="true">Espace garagiste</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Contactez nous
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Instagram : CarWOW25</a></li>
                                        <li><a class="dropdown-item" href="#">Facebook : CarWOW25</a></li>
                                        <li><a class="dropdown-item" href="#">Gmail : CarWow@gmail.com</a></li>
                                    </ul>
                                </li>

                            </ul>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                {/* NAVBAR CLOSE */}
            </header>

            <main>
                <div class="spinner-border m-5" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>


            </main>

            <footer>

            </footer>
        </>
    )
}

export default Home;