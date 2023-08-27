package com.projetosAcademicos.domain;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projetosAcademicos.domain.dto.EnderecoDTO;

@Service
public class EnderecoService {
	
	@Autowired
	private EnderecoRepository enderecoRepository;
	
	public List<EnderecoDTO> getEnderecos(){
		return enderecoRepository.findAll().stream().map(EnderecoDTO::new).collect(Collectors.toList());
	}
	
	public Optional<Endereco> getEnderecoById(Long id) {
		return enderecoRepository.findById(id);
	}
	
	public List<EnderecoDTO> getEnderecoByCep(String cep) {
		return enderecoRepository.findByCep(cep).stream().map(EnderecoDTO::new).collect(Collectors.toList());
	}
	
	public Endereco cadastrar(Endereco endereco) {
		return enderecoRepository.save(endereco);
	}
	
	public Endereco atualizar(Endereco endereco, Long id) {
		
		Optional<Endereco> optional = getEnderecoById(id);
		if (optional.isPresent()) {
			Endereco enderecoBD = optional.get();
			enderecoBD.setRua(endereco.getRua());
			enderecoBD.setNumero(endereco.getNumero());
			enderecoBD.setCep(endereco.getCep());
			enderecoBD.setCidade(endereco.getCidade());
			enderecoBD.setEstado(endereco.getEstado());
			enderecoBD.setPais(endereco.getPais());
			
			enderecoRepository.save(enderecoBD);
			return enderecoBD;
		}
		else {
			throw new RuntimeException("Não foi possível atualizar o endereço informado");
		}
	}
	
	public void remover(Long id) {
		Optional<Endereco> endereco = getEnderecoById(id);
		if(endereco.isPresent()) {
			enderecoRepository.deleteById(id);
		}
	}

}
