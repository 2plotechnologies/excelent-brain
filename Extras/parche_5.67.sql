ALTER TABLE paciente_certificados ADD COLUMN estado VARCHAR(50) DEFAULT 'En proceso' NOT NULL;
ALTER TABLE extra_payments ADD COLUMN paciente_certificado_id BIGINT UNSIGNED NULL;
