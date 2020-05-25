import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class Tabela extends Component{

    render(){

        const { autores, removeAutor } = this.props;

        return(
            <Table>

                <TableHead>
                    <TableRow>
                        <TableCell>Autores</TableCell>
                        <TableCell>Livros</TableCell>
                        <TableCell>Preços</TableCell>
                        <TableCell>Remover</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    { autores.map(autor => (
                        <TableRow key={autor.id}>
                            <TableCell>{autor.nome}</TableCell>
                            <TableCell>{autor.livro}</TableCell>
                            <TableCell>{autor.preco}</TableCell>
                            <TableCell>
                                <Button onClick = {()=>{ removeAutor(autor.id) }}
                                        variant="contained" color="primary">
                                    Remover
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        );
    }

}
export default Tabela;