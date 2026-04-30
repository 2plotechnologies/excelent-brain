CREATE TABLE IF NOT EXISTS fichas_seguimiento(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    tipo BIGINT NOT NULL,
    frecuencia VARCHAR(50),
    motivo VARCHAR(255),
    professional_id BIGINT NOT NULL,
    recomendaciones LONGTEXT,
    
    FOREIGN KEY (professional_id) REFERENCES professionals (id)
);

CREATE TABLE IF NOT EXISTS interconsultas_seguimiento(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(50) NOT NULL,
    professional_id BIGINT NOT NULL,
    motivo VARCHAR(255),
    ficha_seguimiento_id BIGINT NOT NULL,
    
    FOREIGN KEY (professional_id) REFERENCES professionals (id),
    FOREIGN KEY (ficha_seguimiento_id) REFERENCES fichas_seguimiento (id)
);

CREATE TABLE IF NOT EXISTS planes_seguridad(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    senales_advertencia LONGTEXT,
    estrategias LONGTEXT,
    personas_dis LONGTEXT,
    personas_ayuda LONGTEXT,
    razones_vivir LONGTEXT,
    medidas LONGTEXT,
    contactos_emergencia LONGTEXT,
    patient_id BIGINT NOT NULL,
    
    FOREIGN KEY (patient_id) REFERENCES patients(id)
);

CREATE TABLE IF NOT EXISTS reportes_paquete_extra(
   	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    resumen LONGTEXT,
    logros LONGTEXT,
    recomendaciones LONGTEXT,
    proximos_pasos LONGTEXT,
    membresia_id BIGINT NOT NULL,
    
    FOREIGN KEY(membresia_id) REFERENCES membresias (id)
);

ALTER TABLE fichas_seguimiento ADD COLUMN fecha DATE NOT NULL DEFAULT CURRENT_DATE() AFTER id;

ALTER TABLE fichas_seguimiento ADD COLUMN patient_id BIGINT NOT NULL AFTER id;
ALTER TABLE fichas_seguimiento ADD FOREIGN KEY (patient_id) REFERENCES patients(id);

ALTER TABLE reportes_paquete_extra ADD COLUMN fecha DATE NOT NULL DEFAULT CURRENT_DATE() AFTER id;

ALTER TABLE planes_seguridad ADD COLUMN fecha DATE NOT NULL DEFAULT CURRENT_DATE() AFTER id;