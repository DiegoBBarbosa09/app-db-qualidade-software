import React from "react";
import './Home.css';

function Home() {

    return (
        <>
            <div className="container-home" id="about-scroll">
                <div className="title-home">
                    <h1>DB Qualidade de Software</h1>
                </div>
                <div className="intro">
                    <p>É uma empresa dedicada ai desenvolvimento de sites para pequenas empresas.</p>
                    <p>Trabalhamos para criar experiencias online eficazes e envolventes que ajudem nossos clientes a se destaçar no mercado digital</p>
                </div>
                <section className="section-article">
                    <article className="article-missao box">
                        <div className="missao visao content">
                            <h4>Missão e Visão</h4>
                            <p>Nossa missão é capacitar pequenas emrpesas a expadirem sua presença online e alcançarem o sucesso.</p>
                            <p>Acreditamos no poder da internet como ferramenta para impulsionar o crscimento e conectar empresas a seus clientes de forma significativa</p>
                        </div>
                    </article>
                    <article className="article-valores box">
                        <div className="valores content">
                            <h3>Valores</h3>
                            <p>Os valores que norteiam nosso trabalho são:</p>
                        </div>
                        <div className="qualidade content">
                            <h5>Qualidade:</h5>
                            <p>Entregamos produtos e serviços de alta qualidade, sempre visando a satisfação dos nossos clientes.</p>
                        </div>
                        <div className="inovacao content">
                            <h5>Inovação:</h5>
                            <p>Estamos constantemente buscando novas ideias e soluções criativas para atender às necessidades dos nossos clientes.</p>
                        </div>
                        <div className="satisfection content">
                            <h5>Satisfação do Cliente:</h5>
                            <p>A satisfação dos nossos clientes é nossa principal prioridade. Trabalhamos para exceder as expectativas em todos os projetos.</p>
                        </div>
                    </article>
                    <article className="article-diferenciais box">
                        <div className="def content">
                            <h3>Diferenciais</h3>
                            <p>O que torna nossos serviços únicos:</p>
                        </div>
                        <div className="personal content">
                            <h5>Atendimento Personalizado:</h5>
                            <p>Cada cliente é único, e trabalhamos de perto para entender suas necessidades e entregar soluções personalizadas.</p>
                        </div>
                        <div className="solution content">
                            <h5>Soluções Criativas:</h5>
                            <p>Oferecemos designs modernos e funcionais, alinhados às últimas tendências do mercado.</p>
                        </div>
                        <div className="prazos content">
                            <h5>Prazos Ágeis:</h5>
                            <p>Trabalhamos de forma eficiente para entregar projetos dentro dos prazos acordados.</p>
                        </div>
                    </article>
                </section>
            </div>
        </>
    )
}

export default Home;
