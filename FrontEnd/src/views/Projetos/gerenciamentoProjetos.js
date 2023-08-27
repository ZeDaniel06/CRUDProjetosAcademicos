import React from "react";
import axios from 'axios';
import MaterialTable from "material-table";
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
const GerenciamentoProjetos = props => {
  const { useState, useEffect } = React;
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarColor, setSnackbarColor] = useState("");
  const [data, setData] = useState([
  ]);

  useEffect(() => {
    handleClick();
  }, []);
//backup mockable original: "https://demo4149075.mockable.io/projetos" para o get, /alunos para post e put, /delete-aluno para o delete."
  function handleClick() {
    axios
      .get(`http://localhost:8080/api/v1/projetos/`)
      .then(response => {
        console.log(response.data)
        const alunos = response.data.map(c => {
          return {
            id: c.id,
            tituloProjeto: c.tituloProjeto,
            areaProjeto: c.areaProjeto,
            resumo: c.resumo,
            palavraChave1: c.palavraChave1,
            palavraChave2: c.palavraChave2,
            palavraChave3: c.palavraChave3,
            url: c.url,
            idProfessorResponsavel: c.idProfessorResponsavel,
            idAlunoParticipante: c.idAlunoParticipante
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
      .post(`http://localhost:8080/api/v1/projetos/`, {
        "id": newData.id,
        "tituloProjeto": newData.tituloProjeto,
        "areaProjeto": newData.areaProjeto,
        "resumo": newData.resumo,
        "palavraChave1": newData.palavraChave1,
        "palavraChave2": newData.palavraChave2,
        "palavraChave3": newData.palavraChave3,
        "url": newData.url,
        "idProfessorResponsavel": newData.idProfessorResponsavel,
        "idAlunoParticipante": newData.idAlunoParticipante
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
      .put(`http://localhost:8080/api/v1/projetos/${id}`, {
        "id": newData.id,
        "tituloProjeto": newData.tituloProjeto,
        "areaProjeto": newData.areaProjeto,
        "resumo": newData.resumo,
        "palavraChave1": newData.palavraChave1,
        "palavraChave2": newData.palavraChave2,
        "palavraChave3": newData.palavraChave3,
        "url": newData.url,
        "idProfessorResponsavel": newData.idProfessorResponsavel,
        "idAlunoParticipante": newData.idAlunoParticipante
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
      .delete(`http://localhost:8080/api/v1/projetos/${id}`, {
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
  
  const [professores, setProfessores] = useState([]);

  useEffect(() => {
    handleClick();
    fetchProfessores();
  }, []);

  function fetchProfessores() {
    axios
      .get("http://localhost:8080/api/v1/professores/")
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
        setProfessores(professores);
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
        title="Gerenciamento de Projetos"
        options={{
          headerStyle: {
            backgroundColor: 'blue',
          },
          rowStyle: {
            backgroundColor: 'lightblue',
          },
        }}
        columns={[
          { title: 'Id', field: 'id' },
          { title: 'tituloProjeto', field: 'tituloProjeto' },
          { title: 'areaProjeto', field: 'areaProjeto'},
          { title: 'resumo', field: 'resumo' },
          { title: 'palavraChave1', field: 'palavraChave1' },
          { title: 'palavraChave2', field: 'palavraChave2' },
          { title: 'palavraChave3', field: 'palavraChave3' },
          { title: 'url', field: 'url' },
          { title: 'idProfessorResponsavel', field: 'idProfessorResponsavel', lookup: professores.reduce((lookup, professor) => {
            lookup[professor.id] = professor.id + " - " +professor.nome;
            return lookup;
          }, {})  },
          { title: 'idAlunoParticipante', field: 'idAlunoParticipante' }
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

export default GerenciamentoProjetos;
