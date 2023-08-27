package com.projetosAcademicos.api;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetosAcademicos.domain.Endereco;
import com.projetosAcademicos.domain.EnderecoService;
import com.projetosAcademicos.domain.dto.EnderecoDTO;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/enderecos")
public class EnderecosController {
	
	@Autowired
	private EnderecoService service;
	
	@GetMapping
	public ResponseEntity<List<EnderecoDTO>> get() {
		return ResponseEntity.ok(service.getEnderecos());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Endereco> get(@PathVariable("id") Long id) {
		Optional<Endereco> endereco = service.getEnderecoById(id);
		return endereco.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
		
	}
	
	@GetMapping("/cep/{cep}")
	public ResponseEntity<List<EnderecoDTO>> getEnderecoByCep(@PathVariable("cep") String cep) {
		List<EnderecoDTO> listaEnderecos = service.getEnderecoByCep(cep);
		return listaEnderecos.isEmpty() ? 
				ResponseEntity.noContent().build() :
				ResponseEntity.ok(listaEnderecos);
	}
	
	@PostMapping
	public String cadastrarEndereco(@RequestBody Endereco endereco) {
		Endereco c = service.cadastrar(endereco);
		return "Endereço salvo com sucesso: " + c.getId();
	}
	
	@PutMapping("/{id}")
	public String atualizarEndereco(@PathVariable("id") Long id, @RequestBody Endereco endereco) {
		Endereco c = service.atualizar(endereco, id);
		return "Endereço atualizado com sucesso: " + c.getId();
	}
	
	@DeleteMapping("/{id}")
	public String removerEndereco(@PathVariable("id") Long id) {
		service.remover(id);
		return "Endereco removido com sucesso. ";
	}
	
}
