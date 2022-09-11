export async function getStaticProps(){
    //essa função vai rodar apenas do lado do servidor
    const resp = await fetch('http://localhost:3000/api/produtos')
    const produtos = await resp.json()
    return{
        props: {
            produtos
        }
    }
}

// quando usa o build a api para de funcionar pq ela roda na versao de desenvolvimento
//tem que gerar a dev e gerar a build e so dps parar a dev

export default function Estatico4(props){

    function renderizarProdutos(){
        return  props.produtos.map(produtos =>{
            return (<li key={produtos.id}> {produtos.id} -
                {produtos.nome} tem preço de R${produtos.preco}
                </li>)
        })
    }

    return(
        <div>
            <h1>Estático #04</h1>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}