package com.projetosAcademicos.domain;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjetoRepository extends JpaRepository<Projeto, Long>{
	
	List<Projeto> findByPalavraChave1(String palavraChave1);

}
