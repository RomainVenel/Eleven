import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function New() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [animal, setAnimal] = useState("chat");
    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        var bodyFormData = new FormData();
        bodyFormData.append('firstname', firstname);
        bodyFormData.append('lastname', lastname);
        bodyFormData.append('animal', animal);

        if (firstname && lastname !== '') {
            axios({
                method: "post",
                url: "http://127.0.0.1:8080/newAstronaut",
                data: bodyFormData,
                headers: {"Content-Type": "multipart/form-data"},
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

                <select onChange={handleSelect} name='animal'>
                    <option>Chat</option>
                    <option>Panda</option>
                    <option>Raton</option>
                    <option>Canard</option>
                </select>

                <input type="submit" value="Sign up"/>
            </form>
            <div className="bloc-images">
                <img alt={animal} src={require(`/assets/images/${animal}.png`)}/>
            </div>
        </div>
    )
}
export default New;