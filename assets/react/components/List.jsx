import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function List() {

    const [loading, setLoading] = useState(true);
    const [astronauts, setAstronauts] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get(`http://127.0.0.1:8080/astronauts`).then(users => {
            setAstronauts(users.data);
            setLoading(false);
        });
    }

    function editUser(id) {
        navigate('/edit', {
            state: {
                'id': id
            }
        });
    }

    function deleteUser(id) {

        var bodyFormData = new FormData();
        bodyFormData.append('id', id);

        axios({
            method: "post",
            url: "http://127.0.0.1:8080/deleteAstronaut",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function (response) {
            if (response.status === 200) {
                navigate('/');
            }
        })
        .catch(function (response) {
            console.log(response);
        });
    }

    return(
        <div>
            <section className="row-section">
                <div className="container">
                    {loading ? (
                        <div className={'row text-center'}>
                            <span className="fa fa-spin fa-spinner fa-4x"></span>
                        </div>
                    ) : (
                        <div className={'row'}>
                            <main className="profils">
                                { astronauts.map(user =>
                                    <article key={user.id} className="profil">
                                        <div className="profil-flex left">
                                            <img alt={user.animal} src={require(`/assets/images/${user.animal.toLowerCase()}.png`)} className="profil-picture"/>
                                        </div>
                                        <span className="profil-name profil-flex center">{user.firstname} {user.lastname}</span>
                                        <div className="buttons profil-flex right">
                                            <button onClick={(e) => editUser(user.id)}><img alt="edit" src={require(`/assets/images/edit.png`)} className="button-action"/></button>
                                            <button onClick={(e) => deleteUser(user.id)}><img alt="bin" src={require(`/assets/images/bin.png`)} className="button-action"/></button>
                                        </div>
                                    </article>
                                )}
                                { astronauts.length === 0 &&
                                    <div className="empty-astronauts">Pas d'astronautes dans la liste</div>
                                }
                            </main>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
export default List;