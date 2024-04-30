import { useState } from 'react'
import './App.css'
import ProductForm from './Components/ProductForm'
import ProductTable from './Components/ProductTable'

// import ConditionalComponent1 from './Components/ConditionalComponent1'
// import ConditionalComponent2 from './Components/ConditionalComponent2'
// import GenericComponent from './Components/GenericComponent'
// import PostComponent from './Components/PostComponent'
// import Product from './Components/ProductComponent'
// import MyButtonComponent from './Components/MyButtonComponent'

function App() {

  const [products, setproducts] = useState([])
  const [id, setId] = useState(1)
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  const [edit, setEdit] = useState(false)
  const clearForm = () => {
      setName("")
      setPrice("")
      setStock("")
  }
  const saveProduct = (e) => {
      e.preventDefault();
      if(!edit) {
          setId(v => v + 1);
           setproducts((prevProducts) => [...prevProducts, { id, name, price, stock }])
      }

      if(edit) {
          const productIndex = products.findIndex(prod => prod.id ===id)
          products[productIndex] = { id, name, price, stock}
          setproducts(products)
          setEdit(false)
      }
      clearForm()
  }

  const deleteProduct = (id) => {
      setproducts(products.filter((prod) => prod.id !== id))
  }

  const editProduct = (id) => {
      const product = products.find(prod => prod.id === id)
      setId(product.id)
      setName(product.name)
      setPrice(product.price)
      setStock(product.stock)
      setEdit(true)
  }

  const handleName = (e) => {setName(e.target.value)}
  const handlePrice = (e) => {setPrice(e.target.value)}
  const handleStock = (e) => {setStock(e.target.value)}

return (
//  let component;
//  let condition = true;
//  if (condition) {
//     component = <ConditionalComponent1 />]
//  } else {
//     component = <ConditionalComponent2 />
//  }
// const products = [
//   {id: 1, name: 'Laranja',preco: 10},
//   {id: 2, name: 'Uva',preco: 5},
//   {id: 3, name: 'Maçã',preco: 8},
//   {id: 4, name: 'Ameixa',preco: 7}
// ];
// // PRIMERIA FORMA
// const listitems = products.map(product =>
//   <li key={product.id}> {product.name}</li>  
  
  
//   )
//   const post = [
//     {id: 1, title: 'Post 1', description: 'Descrição do Post 1'},
//     {id: 2, title: 'Post 2', description: 'Descrição do Post 2'},
//     {id: 3, title: 'Post 3', description: 'Descrição do Post 3'}
//   ] 

//   return (
//     <>
//       <ul>{listitems}</ul>

//       {/* SEGUNDA FORMA */}
//       <ul>
//         {products.map((prod) => (
//           <li key={prod.id}>{prod.name}</li>
//         ))}
//       </ul>
//             {component}

//     <div>
//   {condition ? <ConditionalComponent1 />: <ConditionalComponent2 />}
//     </div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Nome</th>
//             <th>Preço</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((prod) => (
//             <tr key={prod.id}>
//               <td>{prod.id}</td>    
//               <td>{prod.name}</td>    
//               <td>{prod.preco}</td>    
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Product name ='Arroz' category='Alimento' />
//       <Product name ='Martelo' category='Ferramenta' />

//       <div>
//         {post.map((post) => (
//           <PostComponent key={post.id} title={post.title} description={post.description}/>
//         ))}
//       </div>
//     <div>
//       <GenericComponent>
//           <p>Eu sou o conteúdo passado pela primeira chamada</p>
//           <ul>
//             <li>Item A</li>
//             <li>item B</li>
//             <li>Item C</li>
//           </ul>
//           <hr />
//       </GenericComponent>    
//     </div>
//     <div>
//       <GenericComponent>
//          <p>Eu sou o conteúdo passado pela segunda chamada</p>
//          <ul>
//           <li>Item 01</li>
//           <li>Item 02</li>
//           <li>Item 03</li>
//          </ul>
//          <hr />
//       </GenericComponent>
//     </div>
//     <div>
//     <MyButtonComponent />
//     </div>
//     <div>
//       <useStateComponente1 />
//     </div>
  <>
  <ProductTable products={products} deletar={deleteProduct} edit={editProduct} />
  <ProductForm name={name} price={price} stock={stock} handleName={handleName} handlePrice={handlePrice} handleStock={handleStock} salvar={saveProduct} />
  </>      
  )
}
export default App