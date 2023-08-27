package com.projetosAcademicos.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "projeto")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Projeto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "tituloProjeto")
	private String tituloProjeto;
	
	@Column(name = "areaProjeto")
	private String areaProjeto;
	
	@Column(name = "resumo")
	private String resumo;
	
	@Column(name = "palavraChave1")
	private String palavraChave1;
	
	@Column(name = "palavraChave2")
	private String palavraChave2;
	
	@Column(name = "palavraChave3")
	private String palavraChave3;
	
	@Column(name = "url")
	private String url;
	
	@Column(name = "idProfessorResponsavel")
	private Long idProfessorResponsavel;
	
	@Column(name = "idAlunoParticipante")
	private Long idAlunoParticipante;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTituloProjeto() {
		return tituloProjeto;
	}

	public void setTituloProjeto(String tituloProjeto) {
		this.tituloProjeto = tituloProjeto;
	}

	public String getAreaProjeto() {
		return areaProjeto;
	}

	public void setAreaProjeto(String areaProjeto) {
		this.areaProjeto = areaProjeto;
	}

	public String getResumo() {
		return resumo;
	}

	public void setResumo(String resumo) {
		this.resumo = resumo;
	}

	public String getPalavraChave1() {
		return palavraChave1;
	}

	public void setPalavraChave1(String palavraChave1) {
		this.palavraChave1 = palavraChave1;
	}

	public String getPalavraChave2() {
		return palavraChave2;
	}

	public void setPalavraChave2(String palavraChave2) {
		this.palavraChave2 = palavraChave2;
	}

	public String getPalavraChave3() {
		return palavraChave3;
	}

	public void setPalavraChave3(String palavraChave3) {
		this.palavraChave3 = palavraChave3;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Long getIdProfessorResponsavel() {
		return idProfessorResponsavel;
	}

	public void setIdProfessorResponsavel(Long idProfessorResponsavel) {
		this.idProfessorResponsavel = idProfessorResponsavel;
	}

	public Long getIdAlunoParticipante() {
		return idAlunoParticipante;
	}

	public void setIdAlunoParticipante(Long idAlunoParticipante) {
		this.idAlunoParticipante = idAlunoParticipante;
	}
	
	
	
}
