package com.projetosAcademicos.domain.dto;

import com.projetosAcademicos.domain.Professor;
import lombok.Data;

@Data
public class ProfessorDTO {
	
	private Long id;
	private String matricula;
	private String nome;
	private String curso;
	private Long idEndereco;
	
	public ProfessorDTO(Professor p) {
		this.id = p.getId();
		this.matricula = p.getMatricula();
		this.nome = p.getNome();
		this.curso = p.getCurso();
		this.idEndereco = p.getIdEndereco();
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
