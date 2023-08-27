package com.projetosAcademicos.domain;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EnderecoRepository extends JpaRepository<Endereco, Long>{
	
	List<Endereco> findByCep(String cep);

}
