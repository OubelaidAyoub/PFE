import './Home.css'
import p911 from '../Images/911.jpg'
import bm2 from '../Images/m2.jpg'
import ar8 from '../Images/r8.jpg'
import msls from '../Images/sls.jpg'

import mer from '../Logo/logo_mercedes.png'
import audi from '../Logo/logo_audi.png'
import bmw from '../Logo/logo_bmw.png'
import porsche from '../Logo/logo_porsche.png'


const Home = () => {
    return (
        <>  {/* NAVBAR */}
            <header>
                <nav class="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#000011" }}>
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#" style={{ fontWeight: "bold" }}>CAR-Wow</a>
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
                                <input class="form-control me-2 bg-black border-white text-white" id="inputSearch" type="search" placeholder="Recherche" aria-label="Search" />
                                <button class="btn btn-outline-success bg-black border border-white text-white" type="submit">Rechercher</button>
                            </form>
                        </div>
                    </div>
                </nav>
                {/* NAVBAR CLOSE */}
            </header>

            <main style={{ height: "fit-content" }}>

                {/* CAROUSEL */}

                <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={bm2} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src={msls} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src={ar8} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                {/* CAROUSEL CLOSE */}

                {/* LISTE DES MARQUES */}
                <div class="container" style={{ marginTop: "80px" }}>
                    <h2 class="text-center my-4">Les marques de nos partenaires</h2>

                    <div class="row" style={{ marginTop: "80px" }}>
                        <div class="container text-center" >
                            <div class="row" style={{ display: "flex", padding: "10px", flexDirection: "row", flexWrap: "wrap", margin: "auto", height: "fit-content", maxWidth: "700px", backgroundColor: "skyblue" }}>
                                <div class="col">
                                    Logo 1
                                    <img src="" alt="" />
                                </div>
                                <div class="col">
                                    Logo 2
                                    <img src="" alt="" />
                                </div>
                                <div class="col">
                                    Logo 3
                                    <img src="" alt="" />
                                </div>
                                <div class="col">
                                    Logo 4
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* LISTE DES MARQUES CLOSE */}

                {/* LISTE DES VOITURES */}
                <div class="container-lg row row-cols-1 row-cols-md-2 g-4" style={{ margin: "auto", marginTop: "100px" }}>
                    <div class="col">
                        <div class="card">
                            <img src={ar8} class="card-img-top" alt="..." />
                            <span class="card-body">
                                <h5 class="card-title" style={{ display: "inline" }}>Audi R8</h5>
                                <h3 style={{ display: "inline", float: "right" }}>170 000$</h3>
                                <p class="card-text">Description</p>
                            </span>

                            <hr />
                            <button type="button" style={{ margin: "10px" }} class="btn btn-outline-primary">Voir les details</button>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={msls} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title" style={{ display: "inline" }}>Merecedes sls 63 AMG</h5>
                                <h3 style={{ display: "inline", float: "right" }}>210 000$</h3>
                                <p class="card-text">Description</p>
                            </div>
                            <hr />
                            <button type="button" style={{ margin: "10px" }} class="btn btn-outline-primary">Voir les details</button>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={bm2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title" style={{ display: "inline" }}>Bmw M2</h5>
                                <h3 style={{ display: "inline", float: "right" }}>120 000$</h3>
                                <p class="card-text">Description</p>
                            </div>
                            <hr />
                            <button type="button" style={{ margin: "10px" }} class="btn btn-outline-primary">Voir les details</button>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={p911} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title" style={{ display: "inline" }}>Porsche 911 Turbo S</h5>
                                <h3 style={{ display: "inline", float: "right" }}>270 000$</h3>
                                <p class="card-text" >Description</p>
                            </div>
                            <hr />
                            <button type="button" style={{ margin: "10px" }} class="btn btn-outline-primary">Voir les details</button>
                        </div>
                    </div>
                </div>

                {/* LISTE DES VOITURES CLOSE */}


                <div class="container-fluid" style={{ width: "fit-content", marginTop: "50px" }}>
                    <button type="button" class="btn btn-primary btn-lg" style={{ margin: "auto", width: "200px" }}>Voir plus</button>
                </div>

                {/* ESPACE GARAGISTE */}

                <h1 style={{ margin: "auto", width: "fit-content", marginTop: "100px" }}>Espace garagiste</h1>
                <div style={{ width: "150px", backgroundColor: "black", height: "5px", margin: "auto", marginTop: "20px", borderRadius: "5px" }}></div>

                {/* STYLE DES CARTES */}

                <div class="container my-5">
                    <h2 class="text-center mb-4" style={{ marginTop: "80px" }}>Les plans d'abonnement disponibles</h2>
                    <div class="row" style={{ marginTop: "60px" }}>
                        {/* Carte 1*/}
                        <div class="col-md-4" >
                            <div class="card">
                                <div class="card-header text-center">
                                    <h2>Bronze</h2>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-center">5000 MAD pour 3 mois</h5>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">1 compte administrateur.</li>
                                        <li class="list-group-item">Accès aux mises à jour disponibles.</li>
                                        <li class="list-group-item">Créer des comptes employés illimités.</li>
                                        <li class="list-group-item">Profiter d'un logiciel optimisé et rapide.</li>
                                    </ul>
                                    <div class="text-center mt-3">
                                        <button class="btn btn-primary">Obtenir Pack Bronze</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Carte 2*/}
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-header text-center">
                                    <h2>Silver</h2>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-center">9000 MAD pour 6 mois</h5>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">1 compte administrateur.</li>
                                        <li class="list-group-item">Accès aux mises à jour disponibles.</li>
                                        <li class="list-group-item">Créer des comptes employés illimités.</li>
                                        <li class="list-group-item">Profiter d'un logiciel optimisé et rapide.</li>
                                    </ul>
                                    <div class="text-center mt-3">
                                        <button class="btn btn-primary">Obtenir Pack Silver</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Carte 3*/}
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-header text-center">
                                    <h2>Gold</h2>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-center">15 000 MAD pour 12 mois</h5>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">1 compte administrateur.</li>
                                        <li class="list-group-item">Accès aux mises à jour disponibles.</li>
                                        <li class="list-group-item">Créer des comptes employés illimités.</li>
                                        <li class="list-group-item">Profiter d'un logiciel optimisé et rapide.</li>
                                    </ul>
                                    <div class="text-center mt-3">
                                        <button class="btn btn-primary">Obtenir Pack Gold</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div style={{ width: "fit-content", margin: "auto", marginTop: "100px" }}>
                    <h2 style={{ display: "inline", width: "fit-content" }}>J'ai déjà un compte je <a style={{ textDecoration: "none" }} href="#"><div class="jeConnecte">me connecte</div></a></h2>
                </div>

                {/* ESPACE GARAGISTE CLOSE*/}

            </main>

            <footer style={{ backgroundColor: "black", padding: "100px", marginTop: "100px" }}>
                <h5 style={{ margin: "auto", width: "fit-content", color: "white" }}>Copyright © 2025 Car-Wow. Tous les droits sont réservés</h5>
            </footer>
        </>
    )
}

export default Home;