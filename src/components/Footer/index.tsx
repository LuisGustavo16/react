import Instagram from "../../assests/instagram.png"
import Whatsapp from "../../assests/whastapp.png"
import * as S from "./style"

export function Footer() {
    return (
        <S.Footer>
            <img className  = "insta" src={Instagram} alt="instagram" />
            <img  className = "zap" src={Whatsapp} alt="whatsapp" />
        </S.Footer>
    )
}