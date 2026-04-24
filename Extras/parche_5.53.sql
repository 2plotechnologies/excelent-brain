CREATE TABLE IF NOT EXISTS seguimientos_crm(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    fecha date,
    respuesta varchar(50),
    canal varchar(50),
    proxima_accion varchar(100),
    comentarios varchar(255),
    numero_seguimiento int,
    patient_id BIGINT,
    
    FOREIGN KEY (patient_id) REFERENCES patients (id)
);