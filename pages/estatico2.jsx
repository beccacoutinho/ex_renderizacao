export function getStaticProps(){
    return{
        props: {
            numero: Math.random()
        }
    }
}

/*no  npm run dev a gente consegue dar o refresh e o 
conteudo muda por ser modo de desenvolvimento, fora 
isso sempre será o mesmo compomente*/

export default function Estatico2(props){

    return(
        <div>
            <h1>Estático #02</h1>
            <h2>{props.numero}</h2>
             
        </div>
    )
}