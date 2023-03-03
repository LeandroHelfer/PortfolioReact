import './Central.css'
import fotoperfil from '../Assets/img.svg'
import card1 from '../Assets/card1.svg'
import card2 from '../Assets/card2.svg'
import card3 from '../Assets/card3.svg'
import card4 from '../Assets/card4.svg'

const Central = () => {
    return (
        <div class="container-fluid text-center bg-primary1">
            <div class="row">
                <div class="col-sm-8 mt-5 pt-4">
                    <h1 class="text-white text-end font-family-poppins fw-bold pe-5 me-5 font-sizeh1">Olá, sou o Leandro</h1>
                    <h3 class="text-white text-end font-family-poppins fs-5 fw-light text-justify">Sou desenvolvedor, e gostaria de apresentar meu <br></br>
                        trabalho para você através deste portfólio.</h3>
                </div>
                <div class="col-sm-4">
                    <img class="pt-5 pb-5 mb-5" src={fotoperfil}></img>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <h1 class="text-white font-family fs-2" >Meus Projetos</h1>
                </div>
            </div>
            <div class="row ms-3 me-3 pb-5">
                <div class="col-sm">
                    <img class="pt-4" src={card1}></img>
                </div>
                <div class="col-sm">
                    <img class="pt-4" src={card2}></img>
                </div>
                <div class="col-sm">
                    <img class="pt-4" src={card3}></img>
                </div>
                <div class="col-sm">
                    <img class="pt-4" src={card4}></img>
                </div>
            </div>
        </div>
    )
}

export default Central