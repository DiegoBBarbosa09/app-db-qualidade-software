import React from "react";
import './Contacts.css'
import { FaInstagram } from "react-icons/fa6";


function Contacts() {

    return (
        <>
            <div className="container-contacts" id="contacts-scroll">
                <div className="title-contacts">
                    <h1>Contato</h1>
                </div>
                <div className="rede-sociais">
                    <span>Redese Sociais: </span>
                    <button className="icon">
                        <a href="https://www.instagram.com/db_qualidade_software?igsh=MWtob29qaDd2cm9zaA==" target="_blank">
                            <FaInstagram className="icon-insta"/>
                        </a>
                    </button>
                </div>
            </div>

        </>
    )
}

export default Contacts;