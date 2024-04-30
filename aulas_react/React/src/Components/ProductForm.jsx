import "./ProductForm.module.css"

export default function ProductForm ({name, price, stock, handleName, handlePrice, handleStock, salvar}) {


    return(
        <>
        <div class="container">
        <h2>Cadastro de Produtos</h2>
        <form onSubmit={(e) => salvar(e)}>
            <label htmlFor="nome">Nome:</label>
            <input type="text" name="nome" value={name} onChange={(e) => handleName(e)} required />
            <label htmlFor="preco">Preço:</label>
            <input type="number" name="preco" value={price} onChange={(e) => handlePrice(e)}required />
            <label htmlFor="estoque">Estoque:</label>
            <input type="number" name="estoque" value={stock} onChange={(e) => handleStock(e)}required />
            <input type="submit" value="Cadastrar" />
        </form>
    </div>
        </>
    )
}