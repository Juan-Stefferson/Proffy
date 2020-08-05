import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/36244501?s=460&u=156e06f66fe491e8a71385c0989437cfb6f7d7c7&v=4"
          alt="Juan Pereira"
        />
        <div>
          <strong>Juan Pereira</strong>
          <span>Programação</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
        architecto necessitatibus.
        <br /> <br />
        Autem distinctio nisi aperiam neque unde maiores sed expedita illo, eos
        sunt consequatur vitae, velit temporibus, odit quia quibusdam.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 40,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato!
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
