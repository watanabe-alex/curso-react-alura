import validador from 'validator';

class FormValidator{

    constructor(validacao){
        this.validacao = validacao;
    }

    valida(state){
        const campoValor = state[this.validacao.campo.toString()];
        const metodoValidacao = validador[this.validacao.metodo]

        if(metodoValidacao(campoValor, [], state)){
            console.log('FORM INVALIDO');
            return false
        } else {
            console.log('FORM VALIDO');
            return true;
        }

    }

}
export default FormValidator;
