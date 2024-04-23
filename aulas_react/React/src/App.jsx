import './App.css'
import TableNathan from './Components/tablenathan'

// import ConditionalComponent1 from './Components/ConditionalComponent1'
// import ConditionalComponent2 from './Components/ConditionalComponent2'
// import GenericComponent from './Components/GenericComponent'
// import PostComponent from './Components/PostComponent'
// import Product from './Components/ProductComponent'
// import MyButtonComponent from './Components/MyButtonComponent'

function App() {
  const products = [
    {id: 1, name: "Produto A", price: "R$ 10,00", estoque: 13},
    {id: 2, name: "Produto B", price: "R$ 30,00", estoque: 9},
    {id: 3, name: "Produto C", price: "R$ 60,00", estoque: 18},
    {id: 4, name: "Produto D", price: "R$ 99,00", estoque: 15},
    {id: 5, name: "Produto E", price: "R$ 450,00", estoque: 14},
]

return (
//  let component;
//  let condition = true;
//  if (condition) {
//     component = <ConditionalComponent1 />
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
  <TableNathan />
  </>      
  )
}
export default App

