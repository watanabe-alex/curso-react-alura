import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const CellDeleta  = ({ removeDados, id, titulo }) => {
    if (!removeDados) {
        return null;
    } 
    
    if (titulo) {
         return <TableCell>Deleta</TableCell>
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


const Tabela = props => {

    const { campos, dados, removeDados } = props;

    return(
        <Table>

            <TableHead>
                <TableRow>
                    {campos.map(campo => (
                        <TableCell>{campo.titulo}</TableCell>
                    ))}
                    <CellDeleta removeDados={removeDados} titulo />
                    
                </TableRow>
            </TableHead>

            <TableBody>
                { dados.map(dado => (
                    <TableRow key={dado.id}>

                        {campos.map(campo => (
                                <TableCell>{dado[campo.dado]}</TableCell>
                        ))}
                        <CellDeleta id={dado.id} removeDados={removeDados} />
                        

                    </TableRow>
                ))}
            </TableBody>

        </Table>
    );

}
export default Tabela;