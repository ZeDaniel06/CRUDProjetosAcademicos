package com.projetosAcademicos.domain;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projetosAcademicos.domain.dto.ProjetoDTO;

@Service
public class ProjetoService {
	
	@Autowired
	private ProjetoRepository projetoRepository;
	
	public List<ProjetoDTO> getProjetos(){
		return projetoRepository.findAll().stream().map(ProjetoDTO::new).collect(Collectors.toList());
	}
	
	public Optional<Projeto> getProjetoById(Long id) {
		return projetoRepository.findById(id);
	}
	
	public List<ProjetoDTO> getProjetoByPalavraChave1(String palavraChave1) {
		return projetoRepository.findByPalavraChave1(palavraChave1).stream().map(ProjetoDTO::new).collect(Collectors.toList());
	}
	
	public Projeto cadastrar(Projeto projeto) {
		return projetoRepository.save(projeto);
	}
	
	public Projeto atualizar(Projeto projeto, Long id) {
		
		Optional<Projeto> optional = getProjetoById(id);
		if (optional.isPresent()) {
			Projeto projetoBD = optional.get();
			projetoBD.setTituloProjeto(projeto.getTituloProjeto());
			projetoBD.setAreaProjeto(projeto.getAreaProjeto());
			projetoBD.setResumo(projeto.getResumo());
			projetoBD.setPalavraChave1(projeto.getPalavraChave1());
			projetoBD.setPalavraChave2(projeto.getPalavraChave2());
			projetoBD.setPalavraChave3(projeto.getPalavraChave3());
			projetoBD.setUrl(projeto.getUrl());
			projetoBD.setIdProfessorResponsavel(projeto.getIdProfessorResponsavel());
			projetoBD.setIdAlunoParticipante(projeto.getIdAlunoParticipante());
			
			projetoRepository.save(projetoBD);
			return projetoBD;
		}
		else {
			throw new RuntimeException("Não foi possível atualizar o projeto informado");
		}
	}
	
	public void remover(Long id) {
		Optional<Projeto> projeto = getProjetoById(id);
		if(projeto.isPresent()) {
			projetoRepository.deleteById(id);
		}
	}

}
