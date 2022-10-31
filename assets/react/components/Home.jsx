import React from 'react';

function Home() {

    return(
        <div className="home-page">
            <h1>Bienvenue dans la 11ème galaxie</h1>
            <p>Tu rêves d'envoyer ton animal de compagnie sur la lune ?</p>
            <p>Tu es au bon endroit !</p>
            <p>Viens créer ton propre AstroAnimal...</p>

            <div className="home-image">
                <img alt="astro-cat" src={require(`/assets/images/home-cat.jpg`)}/>
            </div>
        </div>
    )
}
export default Home;