export function getStaticProps(){
    return{
        revalidade: 7,
        //o proprio next muda dps de um tempo
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico3(props){

    return(
        <div>
            <h1>Estático #03</h1>
            <h2>{props.numero}</h2>  
        </div>
    )
}