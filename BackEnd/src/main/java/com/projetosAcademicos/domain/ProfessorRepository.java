package com.projetosAcademicos.domain;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfessorRepository extends JpaRepository<Professor, Long>{

	List<Professor> findByMatricula(String matricula);
	

}
