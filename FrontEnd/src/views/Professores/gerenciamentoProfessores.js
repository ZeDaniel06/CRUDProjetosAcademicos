import React from "react";
import axios from 'axios';
import MaterialTable from "material-table";
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
const GerenciamentoProfessores = props => {
  const { useState, useEffect } = React;
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarColor, setSnackbarColor] = useState("");
  const [data, setData] = useState([
  ]);

  useEffect(() => {
    handleClick();
  }, []);
//backup mockable original: "https://demo4149075.mockable.io/Professores" para o get, /alunos para post e put, /delete-aluno para o delete."
  function handleClick() {
    axios
      .get(`http://localhost:8080/api/v1/professores`)
      .then(response => {
        console.log(response.data)
        const professores = response.data.map(c => {
          return {
            id: c.id,
            matricula: c.matricula,
            nome: c.nome,
            curso: c.curso,
            idEndereco: c.idEndereco
          };
        });
        setData(professores);
      })
      .catch(falha => {
        setSnackbarMessage("Falha ao carregar! Verifique a requisição dos dados.");
        setSnackbarColor("red");
        setShowSnackbar(true);
      });
  }

  function handleCreate(newData) {
    axios
      .post(`http://localhost:8080/api/v1/professores`, {
        "id": newData.id,
        "matricula": newData.matricula,
        "nome": newData.nome,
        "curso": newData.curso,
        "idEndereco": newData.idEndereco
      })
      .then(function (response) {
        setSnackbarMessage("Cadastro concluído com sucesso!");
        setSnackbarColor("green");
        setShowSnackbar(true);
      })
      .catch(falha => {
        setSnackbarMessage("Falha no cadastro! Verifique a requisição dos dados.");
        setSnackbarColor("red");
        setShowSnackbar(true);
      });
  }

  function handleUpdate(newData, oldData) {
    const id = oldData.id;
    axios
      .put(`http://localhost:8080/api/v1/professores/${id}`, {
        "id": newData.id,
        "matricula": newData.matricula,
        "nome": newData.nome,
        "curso": newData.curso,
        "idEndereco": newData.idEndereco
      })
      .then(function (response) {
        setSnackbarMessage("Edição concluída com sucesso!");
        setSnackbarColor("green");
        setShowSnackbar(true);
      })
      .catch(falha => {
        setSnackbarMessage("Falha na edição! Verifique a requisição dos dados.");
        setSnackbarColor("red");
        setShowSnackbar(true);
      });
  }

  function handleDelete(oldData) {
    const id = oldData.id;
    axios
      .delete(`http://localhost:8080/api/v1/professores/${id}`, {
        "id": oldData.id
      })
      .then(function (response) {
        setSnackbarMessage("Deletado com sucesso!");
        setSnackbarColor("green");
        setShowSnackbar(true);
      })
      .catch(falha => {
        setSnackbarMessage("Falha ao deletar! Verifique a requisição dos dados.");
        setSnackbarColor("red");
        setShowSnackbar(true);
      });
  }
  /*Coletando dados de endereços para a List abaixo */ 
  
  const [enderecos, setEnderecos] = useState([]);

  useEffect(() => {
    handleClick();
    fetchEnderecos();
  }, []);

  function fetchEnderecos() {
    axios
      .get(`http://localhost:8080/api/v1/enderecos`)
      .then(response => {
        console.log(response.data)
        const enderecos = response.data.map(c => {
          return {
            id: c.id,
            rua: c.rua,
            numero: c.numero,
            cep: c.cep,
            cidade: c.cidade,
            estado: c.estado,
            pais: c.pais
          };
        });
        setEnderecos(enderecos);
      })
      .catch(error => console.log(error));
  }
  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };
  /*Coletando dados de endereços para a List acima */
  return (
    [
      <>
    <Snackbar
        open={showSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
      >
        <SnackbarContent style={{ backgroundColor: snackbarColor }} message={snackbarMessage} />
      </Snackbar>
      <MaterialTable
        title="Gerenciamento de Professores"
        options={{
          headerStyle: {
            backgroundColor: 'green',
          },
          rowStyle: {
            backgroundColor: 'lightgreen',
          },
        }}
        columns={[
          { title: 'Id', field: 'id' },
          { title: 'matricula', field: 'matricula', type: 'numeric' },
          { title: 'nome', field: 'nome' },
          { title: 'curso', field: 'curso' },
          { title: 'endereco', field: 'idEndereco', lookup: enderecos.reduce((lookup, endereco) => {
            lookup[endereco.id] = endereco.id + " - " +endereco.rua;
            return lookup;
          }, {}) }
        ]}
        data={data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                handleCreate(newData)

                const dataCreate = [...data];

                setData([...dataCreate, newData]);

                resolve();
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                handleUpdate(newData, oldData);
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);

                resolve();
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                handleDelete(oldData)
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve()
              }, 1000)
            }),
        }}
      />
      </>]
  )
}

export default GerenciamentoProfessores;
