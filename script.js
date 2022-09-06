
// Aqui é onde deve ser colocadas as informações que queremos saber, em 'QualAluno' para saber o nome e em 'OQueQuerSaber' para saber a informação que queremos saber.
//---------------------------------------------------
const QualAluno = 'Pedro'
const OqueQuerSaber = 4

// tudo* : ver todas as informações
// 1 : ver nome do aluno
// 2 : ver idade do aluno
// 3 : ver a quanto tempo o aluno treina no local
// 4 : ver se o aluno já é shapeado o não
//---------------------------------------------------

// Abaixo as informações dos alunos, que é apenas um array (academia), com objetos dentro onde são guardadas as informações dos alunos.
let academia = [
    {
        aluno: "Kauã",
        idade: 15,
        tempo: "10 meses",
        shapeado: false
    },
    {
        aluno: "Gabriel",
        idade: 23,
        tempo: "5 anos",
        shapeado: true
    },
    {
        aluno: "Júlio",
        idade: 18,
        tempo: "1 ano",
        shapeado: false
    },
    {
        aluno: "Matheus",
        idade: 30,
        tempo: "11 anos",
        shapeado: false
    },
    {
        aluno: "Pedro",
        idade: 12,
        tempo: "2 meses",
        shapeado: false
    }
]
//---------------------------------------------------

//Aqui é onde feita toda a manipulação e funcionalidades do código, com a função 'SelecionarAluno'(funcção mãe) responsável por todas as outras.
function SelecionarAluno () {

//A ArrowFunction 'EncontrarObjetos' responsável por identificar o objeto certo em relação a variável 'QualAluno'.
    let EnconstrarObjeto = academia.find((academia) => {
        if(QualAluno === academia.aluno) {
                
// A função 'Informacoes' responsável por renderizar todas as informações do bloco escolhido, mas apenas se na variável 'OqueQuerSaber' tiver o valor 'Tudo'.
            Informacoes()
            function Informacoes () {
                if (OqueQuerSaber === 'Tudo') {

                    console.log(`O aluno ${academia.aluno} atualmente tem ${academia.idade} anos de idade, treina ah ${academia.tempo}.`)

                } else {
// Caso o IF da função anterior não proceder a função 'InformacoesSeparadas' irá renderizar cada elemento do bloco individualmente
                    InformacoesSeparadas()
                    function InformacoesSeparadas() {

                        if (OqueQuerSaber === 1) {
                            console.log(`Nome do aluno: ${academia.aluno}.`)
                        } else if (OqueQuerSaber === 2) {
                            console.log(`O aluno tem: ${academia.idade} anos de idade.`)
                        } else if (OqueQuerSaber === 3) {
                            console.log(`O aluno treina a: ${academia.tempo}`)
                        } else if (OqueQuerSaber === 4) {

                            if (academia.shapeado === true) {
                                var shape = 'Shapeado'
                            } else {
                                var shape = 'Não Shapeado'
                            }
                            console.log(` O Aluno é um: ${shape}`)
                        }

                    }
                }
                
            }
        }
    })

}
SelecionarAluno()





