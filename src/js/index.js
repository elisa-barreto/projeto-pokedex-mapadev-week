// quando clicar no pokémon da listagem temos que esconder o cartao pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

// pra isso vamos precisar trabalhar com dois elementos:
// 1- listagem 
// 2- cartão pokémon
// precisamos criar duas variáveis em JS para trabalhar com os elementos na tela

const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemon.forEach(pokemon => {
  // vamos precisar trabalhar com evento de click feito pelo usuário na listagem de pokémons

  pokemon.addEventListener('click', () => {
    // remover a classe aberto só do cartão que estiver aberto
    const cartaoPokemonAberto = document.querySelector('.aberto')
      cartaoPokemonAberto.classList.remove('aberto')

      // ao cliclar em um pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar 
      const idPokemonSelecionado = pokemon.attributes.id.value

      const idDoCartaoPokemonParaABrir = 'cartao-' + idPokemonSelecionado
      const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaABrir)
      cartaoPokemonParaAbrir.classList.add('aberto')

      // remover a classe ativo no item da listagem selecionado
      const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')
        
        // adicionar a classe ativo no item da listagem selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
        
    })
})