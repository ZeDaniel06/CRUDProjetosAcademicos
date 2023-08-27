package com.projetosAcademicos.domain.dto;

import com.projetosAcademicos.domain.Endereco;
import lombok.Data;

@Data
public class EnderecoDTO {
	
	private Long id;
	private String rua;
	private String numero;
	private String cep;
	private String cidade;
	private String estado;
	private String pais;
	
	public EnderecoDTO(Endereco e) {
		this.id = e.getId();
		this.rua = e.getRua();
		this.numero = e.getNumero();
		this.cep = e.getCep();
		this.cidade = e.getCidade();
		this.estado = e.getEstado();
		this.pais = e.getPais();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRua() {
		return rua;
	}

	public void setRua(String rua) {
		this.rua = rua;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getPais() {
		return pais;
	}

	public void setPais(String pais) {
		this.pais = pais;
	}
	
	
	
}
