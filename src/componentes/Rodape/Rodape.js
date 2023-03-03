import './Rodape.css'
import linkedin from "../Assets/linkedin.svg"
import instagram from "../Assets/instagram.svg"
import github from "../Assets/github.svg"
import whatsapp from "../Assets/whatsapp.svg"
import email from "../Assets/email.svg"

const Rodape = () => {
    return (
        <div class="row ms-3 me-3 pb-5 ps-5">
            <div class="col-sm">
            <h1 class="pt-3 font">Minhas Redes</h1>
                <div class="col-sm d-flex align-items-center">
                    <img class="pt-2" src={linkedin}></img>
                    <p class="links pt-4 ps-2">linkedin.com/in/leandrohelfer</p>
                </div>
                <div class="col-sm d-flex align-items-center">
                    <img class="pt-3" src={github}></img>
                    <p class="links pt-4 ps-2">github.com/LeandroHelfer</p>
                </div>
                <div class="col-sm d-flex align-items-center">
                    <img class="pt-3" src={instagram}></img>
                    <p class="links pt-4 ps-2">instagram.com/leandrohelfer</p>
                </div>
            </div>
            <div class="col-sm">
                <h1 class="pt-3 font">Fale Comigo</h1>
                    <div class="col-sm d-flex align-items-center">
                        <img class="pt-3" src={whatsapp}></img>
                        <p class="links pt-4 ps-2">https://wa.me/5551995285006</p>
                    </div>
                    <div class="col-sm d-flex align-items-center">
                        <img class="pt-3 ps-2" src={email}></img>
                        <p class="links pt-4 ps-3">leandrohelfer@gmail.com</p>
                    </div>
            </div>
        </div>
    )
}

export default Rodape;