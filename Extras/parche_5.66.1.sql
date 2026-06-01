CREATE TABLE paciente_certificados (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombres VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    dni VARCHAR(20) NOT NULL UNIQUE,
    telefono VARCHAR(20) NOT NULL,
    correo VARCHAR(255) NULL,
    tipo_certificado ENUM( 'trabajo', 'estudios' ) NOT NULL,
    created_at TIMESTAMP NULL DEFAULT NULL,
    updated_at TIMESTAMP NULL DEFAULT NULL,
    deleted_at TIMESTAMP NULL DEFAULT NULL
);
