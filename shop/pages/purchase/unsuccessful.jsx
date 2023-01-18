import Link from "next/link";
import {Header} from "../../src/components/Header" 
export default function Unsuccessful() {
    return (
        <>
        <Header/>
        <div style={{ "width": "100%", "text-align": "center", "background-color": "rgb(49, 55, 89)", "align-items": "center", "padding": "1rem" }}>
            <section style={{"display": "flex", "align-items": "center","justify-content": "space-around","padding": "2rem", "color": "rgb(242, 167, 101)"}}>
                <h1 style={{"margin": "0"}}>Ocorreu um erro! </h1>
            <i class="bi bi-emoji-frown" style={{ "font-size": "1.5rem", "vertical-align": "middle" }}></i>    
</section>
            <h4 >Não conseguimos completar sua compra, Volte para a nossa <Link href="/" style={{"border-bottom": "2px solid rgb(48, 132, 242)"}}>página principal</Link> e tente novamente ^_^ .</h4>
        </div>
        </>
    )
}