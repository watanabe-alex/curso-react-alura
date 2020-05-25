import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const CellDeleta  = ({ removeDados, id }) => {
    if (!removeDados) {
        return null;
    } 

    return (
        <TableCell>
            <Button onClick = {()=>{ removeDados(id) }}
                    variant="contained" color="primary">
                Remover
            </Button>
        </TableCell>
    );
}

const TituloDeleta = ({ removeDados }) => {
    if (!removeDados) {
        return null;
    }
    return <TableCell>Deleta</TableCell>
}

const Tabela = props => {

    const { campos, dados, removeDados } = props;

    return(
        <Table>

            <TableHead>
                <TableRow>
                    {campos.map(campo => (
                        <TableCell key={campo.titulo}>{campo.titulo}</TableCell>
                    ))}
                    <TituloDeleta removeDados={removeDados} />
                    
                </TableRow>
            </TableHead>

            <TableBody>
                { dados.map(dado => (
                    <TableRow key={dado.id}>

                        {campos.map(campo => (
                                <TableCell key={campo.dado}>{dado[campo.dado]}</TableCell>
                        ))}
                        <CellDeleta id={dado.id} removeDados={removeDados} />
                        

                    </TableRow>
                ))}
            </TableBody>

        </Table>
    );

}
export default Tabela;