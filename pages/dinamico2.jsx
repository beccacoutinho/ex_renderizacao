export async function getServerSideProps(){
    
    const resp = await fetch('http://localhost:3000/api/produtos')
    const produtos = await resp.json()
    return{
        props: {
            produtos
        }
    }
}

export default function Dinamico2(props){

    function renderizarProdutos(){
        return  props.produtos.map(produtos =>{
            return (<li key={produtos.id}> {produtos.id} -
                {produtos.nome} tem preço de R${produtos.preco}
                </li>)
        })
    }

    return(
        <div>
            <h1>Dinâmico #02</h1>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}