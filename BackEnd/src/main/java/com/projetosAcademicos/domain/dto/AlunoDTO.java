package com.projetosAcademicos.domain.dto;

import com.projetosAcademicos.domain.Aluno;
import com.projetosAcademicos.domain.Endereco;

import lombok.Data;

@Data
public class AlunoDTO {
	
	private Long id;
	private String matricula;
	private String nome;
	private String cpf;
	private String curso;
	private Long idEndereco;
	
	public AlunoDTO(Aluno c) {
		this.id = c.getId();
		this.matricula = c.getMatricula();
		this.nome = c.getNome();
		this.cpf = c.getCpf();
		this.curso = c.getCurso();
		this.idEndereco = c.getIdEndereco();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMatricula() {
		return matricula;
	}

	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getCurso() {
		return curso;
	}

	public void setCurso(String curso) {
		this.curso = curso;
	}

	public Long getIdEndereco() {
		return idEndereco;
	}

	public void setIdEndereco(Long idEndereco) {
		this.idEndereco = idEndereco;
	}
	
}
