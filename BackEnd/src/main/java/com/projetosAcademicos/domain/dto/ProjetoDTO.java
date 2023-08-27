package com.projetosAcademicos.domain.dto;

import com.projetosAcademicos.domain.Projeto;
import lombok.Data;

@Data
public class ProjetoDTO {
	
	private Long id;
	private String tituloProjeto;
	private String areaProjeto;
	private String resumo;
	private String palavraChave1;
	private String palavraChave2;
	private String palavraChave3;
	private String url;
	private Long idProfessorResponsavel;
	private Long idAlunoParticipante;
	
	
	public ProjetoDTO(Projeto p) {
		this.id = p.getId();
		this.tituloProjeto = p.getTituloProjeto();
		this.areaProjeto = p.getAreaProjeto();
		this.resumo = p.getResumo();
		this.palavraChave1 = p.getPalavraChave1();
		this.palavraChave2 = p.getPalavraChave2();
		this.palavraChave3 = p.getPalavraChave3();
		this.url = p.getUrl();
		this.idProfessorResponsavel = p.getIdProfessorResponsavel();
		this.idAlunoParticipante = p.getIdAlunoParticipante();
	}


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
