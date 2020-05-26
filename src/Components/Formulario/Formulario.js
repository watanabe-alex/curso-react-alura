import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import FormValidator from '../../utils/FormValidator';
import PopUp from '../../utils/PopUp';
import Toast from '../Toast/Toast';

class Formulario extends Component {

    constructor (props) {
        super(props);

        this.validador = new FormValidator([
            {
                campo: 'nome',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um nome'
            },
            {
                campo: 'livro',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um livro'
            },
            {
                campo: 'preco',
                metodo: 'isInt',
                args: [{min: 0, max: 9999}],
                validoQuando: true,
                mensagem: 'Entre com um valor numérico'
            }
        ]);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
            validacao: this.validador.valido(),
            mensagem: {
                open: false,
                texto: '',
                tipo: 'success'
            }
        }

        this.state = this.stateInicial;
    }

    escutadorDeInput = event=> {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    submitFormulario = ()=>{

        const validacao = this.validador.valida(this.state);

        if (validacao.isValid) {
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);
        } else {
            const { nome, livro, preco } = validacao;
            const campos = [nome, livro, preco];

            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            });

            const erros = camposInvalidos.reduce(
                (texto, campo) => texto + campo.message + '. '
                ,
                ''
            );
            
            this.setState({
                mensagem: {
                    open: true,
                    texto: erros,
                    tipo: 'error'
                }
            })
        }

    }

    render() {

        const { nome, livro, preco } = this.state;

        return(
            <>
                <Toast
                    open={this.state.mensagem.open}
                    severity={this.state.mensagem.tipo}
                    handleClose={() => 
                        this.setState({ 
                            mensagem: {
                                open: false
                            }
                        })
                    }
                >
                    {this.state.mensagem.texto}
                </Toast>
                <form>
                    <Grid container spacing={2} alignItems='center'>
                        <Grid item>
                            <TextField
                                    id="nome"
                                    name="nome"
                                    label="Nome"
                                    variant="outlined"
                                    value={nome}
                                    onChange={this.escutadorDeInput}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                    id="livro"
                                    name="livro"
                                    label="Livro"
                                    variant="outlined"
                                    value={livro}
                                    onChange={this.escutadorDeInput}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                    id="preco"
                                    name="preco"
                                    label="Preço"
                                    variant="outlined"
                                    value={preco}
                                    onChange={this.escutadorDeInput}
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                    variant='contained'
                                    color='primary'
                                    type="button"
                                    onClick={this.submitFormulario}
                            >
                                Salvar
                            </Button>
                        </Grid>
                    </Grid>
                    
                </form>
            </>
        );    
    }

}
export default Formulario;