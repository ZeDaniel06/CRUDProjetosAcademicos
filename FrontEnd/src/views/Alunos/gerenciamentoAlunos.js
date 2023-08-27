import React from "react";
import axios from 'axios';
import MaterialTable from "material-table";
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
const GerenciamentoAlunos = props => {
  const { useState, useEffect } = React;
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarColor, setSnackbarColor] = useState("");
  const [data, setData] = useState([
  ]);

  useEffect(() => {
    handleClick();
  }, []);
//backup mockable original: "https://demo4149075.mockable.io/alunos" para o get, /alunos para post e put, /delete-aluno para o delete."
  function handleClick() {
    axios
      .get("http://localhost:8080/api/v1/alunos/")
      .then(response => {
        console.log(response.data)
        const alunos = response.data.map(c => {
          return {
            id: c.id,
            cpf: c.cpf,
            matricula: c.matricula,
            nome: c.nome,
            idEndereco: c.idEndereco,
            curso: c.curso
          };
        });
        setData(alunos);
      })
      .catch(falha => {
        setSnackbarMessage("Falha ao carregar! Verifique a requisição dos dados.");
        setSnackbarColor("red");
        setShowSnackbar(true);
      });
  }

  function handleCreate(newData) {
    axios
      .post("http://localhost:8080/api/v1/alunos/", {
        "id": newData.id,
        "cpf": newData.cpf,
        "matricula": newData.matricula,
        "nome": newData.nome,
        "idEndereco": newData.idEndereco,
        "curso": newData.curso
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
      .put(`http://localhost:8080/api/v1/alunos/${id}`, {
        "id": newData.id,
        "cpf": newData.cpf,
        "matricula": newData.matricula,
        "nome": newData.nome,
        "idEndereco": newData.idEndereco,
        "curso": newData.curso
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
      .delete(`http://localhost:8080/api/v1/alunos/${id}`, {
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
      .get("http://localhost:8080/api/v1/enderecos/")
      .then(response => {
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
        title="Gerenciamento de Alunos"
        options={{
          headerStyle: {
            backgroundColor: 'purple',
          },
          rowStyle: {
            backgroundColor: 'violet',
          },
        }}
        columns={[
          { title: 'Id', field: 'id' },
          { title: 'cpf', field: 'cpf' },
          { title: 'matricula', field: 'matricula', type: 'numeric' },
          { title: 'nome', field: 'nome' },
          { title: 'endereco', field: 'idEndereco', lookup: enderecos.reduce((lookup, endereco) => {
            lookup[endereco.id] = endereco.id + " - " +endereco.rua;
            return lookup;
          }, {}) }, //usar lookup para a list de idEndereço
          { title: 'curso', field: 'curso' }
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
      </>
    ]
  )
}

export default GerenciamentoAlunos;
