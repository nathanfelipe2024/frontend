import ChildComponent from "./ChildComponent"

function IntroComponent() {
    const a = 5, b = 2, nome = 'Nathan'
    const aluno = {
        nome:'Joao',
        email: 'joao@gmail.com'
    }

    return (
        <div>
        <h2>Componente de Introdução</h2>   
        <h3>Template Experessions</h3>
        <p>{nome}, o produto entre {a} e {b} é {a * b}</p>
        <p>Aluno {aluno.nome} <br /> E-mail: {aluno.email} </p>
        <ChildComponent /> 
        </div>
    )
}

export default IntroComponent