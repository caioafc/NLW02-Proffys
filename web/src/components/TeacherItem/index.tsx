import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/52216605?s=460&u=f11d0e25fa7c21cb6d10cdb2a7f5587198fe0092&v=4" alt="Caio Armestrong"/>
                <div>
                    <strong>Caio Armestrong</strong>
                    <span>Quimica</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br/><br/>
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;