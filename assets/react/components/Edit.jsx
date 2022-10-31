import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";

function Edit() {

    const [loading, setLoading] = useState(true);
    const [astronaut, setAstronaut] = useState(false);
    const [firstname, setFirstname] = useState(astronaut.firstname);
    const [lastname, setLastname] = useState(astronaut.lastname);
    const [animal, setAnimal] = useState(astronaut.animal);
    const { state } = useLocation();

    useEffect(() => {
        getAstronaut();
    }, []);

    function getAstronaut() {
        axios.get('http://127.0.0.1:8080/getAstronaut', { params: { id: state.id } }).then(user => {
            setAstronaut(user.data);
            setLoading(false);
            setFirstname(user.data.firstname);
            setLastname(user.data.lastname);
            setAnimal(user.data.animal);
        });
    }

    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        var bodyFormData = new FormData();
        bodyFormData.append('id', astronaut.id);
        bodyFormData.append('firstname', firstname);
        bodyFormData.append('lastname', lastname);
        bodyFormData.append('animal', animal);

        if (firstname && lastname !== '') {
            axios({
                method: "post",
                url: "http://127.0.0.1:8080/editAstronaut",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then(function (response) {
                if (response.status === 200) {
                    navigate('/list');
                }
            })
            .catch(function (response) {
                console.log(response);
            });
        }

    }

    function handleErrors(val) {
        if (val === '') {
            document.getElementById('form-errors').style.display = 'flex';
        } else {
            document.getElementById('form-errors').style.display = 'none';
        }
    }

    function handleFirstname(e) {
        let val = e.target.value;
        setFirstname(val);
        handleErrors(val);
    }

    function handleLastname(e) {
        let val = e.target.value;
        setLastname(val);
        handleErrors(val);
    }

    function handleSelect(e) {
        setAnimal(e.target.value.toLowerCase());
    }

    return(
        <div className="bloc-new">
            <form className="form-new" onSubmit={handleSubmit}>
                <div className="form-name">
                    <label htmlFor="firstname">Prénom</label>
                    <input type="text" name='firstname' value={firstname} onChange={handleFirstname} id="fullname" placeholder="Prénom" />

                    <label htmlFor="lastname">Nom</label>
                    <input type="text" name='lastname' value={lastname} onChange={handleLastname} id="email" placeholder="Nom" />
                </div>

                <span id="form-errors">Les deux champs doivent être remplis</span>

                <select onChange={handleSelect} value={animal} name='animal'>
                    <option value="chat">Chat</option>
                    <option value="panda">Panda</option>
                    <option value="raton">Raton</option>
                    <option value="canard">Canard</option>
                </select>

                <input type="submit" value="Modifier"/>
            </form>
            <div className="bloc-images">
                {!loading &&
                    <img alt={animal} src={require(`/assets/images/${animal}.png`)}/>
                }
            </div>
        </div>
    )
}
export default Edit;