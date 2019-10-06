class Usuario {

    nome: String;
    matricula: String;
    cpf: number;
    data_nascimento: Date;

    constructor(usuario){
        this.nome = "";
    }

    setNome(nome: String){
        this.nome = nome;
    }
}

//module.exports = Usuario;