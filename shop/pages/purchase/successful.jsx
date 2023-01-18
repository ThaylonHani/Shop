import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Header } from "../../src/components/Header";
export default function Successful() {
    const [loading, isLoading] = useState(true);
    const router = useRouter();
    const { name, tel, cpf, card } =  router.query;



   try {
    return (
        <div  className="successful">
            <Header/>
            { name && tel && cpf && card ? <> {(setTimeout(() =>  isLoading(false),2000) ,loading ? <section className="loading-message"> <h1>Compra sendo confirmada, pode demorar alguns segundos</h1>
                <i className="bi bi-arrow-clockwise" ></i> </section> : <> <h1>Compra feita com sucesso !</h1> <i className="bi bi-check2"></i>  </>)} </> : <h1 className="error-message" style={{"text-align":"center"}}>Aconteceu um erro ! <br
            /> Você não tem permissão de entrar nessa página , volte para a <Link href="/" style={{"border-bottom": "2px solid rgb(48, 132, 242)"}}>página principal</Link>. </h1>}
               
    
            <style jsx>
                {
                `

                .successful{
                    text-align:center;
                }
                h1{
                    margin-top:2rem;
                    color:rgb(132, 216, 130);
                }
                i{ justify:content:center;
                    font-size:3rem;
                    color:rgb(132, 216, 130)}
                .bi-arrow-clockwise::before{
                   
                    animation:load 2s linear infinite ;
                   
                }
                @keyframes load {
                    from{
                        transform: rotate(0deg);
                    }
                    to{
                        transform: rotate(360deg);
                    }
                }

                

                `
            }

            </style>
            
        </div>
    )
   } catch (error) {
       console.error(error)
   }
}