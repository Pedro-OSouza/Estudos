export default class BancoDeDados {
    constructor(storagekey = "itens", id = "id"){
        this.storagekey = storagekey,
        this.id = id
    }

    /* Tratamento de Id */
    obterUltimoId(){
        return parseInt(localStorage.getItem(this.id)) || 0
    }

    salvarNovoId(id){
        localStorage.setItem(this.id, id.toString())
    }

    gerarNovoId(){
        const novoId = this.obterUltimoId() + 1
        this.salvarNovoId(novoId)
        return novoId
    }

    /* Salvar e carregar */
    salvar(itens){
        localStorage.setItem(this.storagekey, JSON.stringify(itens));
    }

    carregar(){
        const dados = localStorage.getItem(this.storagekey)
        try {
            const parsed = JSON.parse(dados);
            return Array.isArray(parsed) ? parsed : [];
          } catch (e) {
            return [];
          }
    }

    /* Adicionar itens, listar, buscar, apagar */
    adicionar(nome, categoria, status){
        const itens = this.carregar()
        const novoItem = {
            id: this.gerarNovoId(),
            nome,
            categoria, 
            status
        }
        itens.push(novoItem)
        this.salvar(itens)
        return novoItem
    }

    lista(){
        return this.carregar()
    }

    buscar(id){
        const itens = this.carregar()
        return itens.find((item) => item.id === id)
    }

    remover(id){
        let itens = this.carregar()
        id = parseInt(id);
        itens = itens.filter((item) => item.id !== id);
        this.salvar(itens);
    }


    /* apagar depois */
    confirmarGravacao(){
        console.log("Item gravado")
        alert("Item gravado")
    }
}