-- Agregar columnas a la tabla de paciente_certificados.
ALTER TABLE paciente_certificados ADD COLUMN historia TEXT NULL;
ALTER TABLE paciente_certificados ADD COLUMN professional_id INT UNSIGNED NULL;

-- Insertar nuevos precios de certificados si no existen.
INSERT INTO precios (descripcion, nuevos, continuos, idClasificacion, servicio, activo, sesiones)
SELECT 'Informe Psicológico', 50, 50, 3, '1', '1', 1
FROM dual
WHERE NOT EXISTS (
    SELECT 1 FROM precios WHERE descripcion = 'Informe Psicológico' AND idClasificacion = 3
);

INSERT INTO precios (descripcion, nuevos, continuos, idClasificacion, servicio, activo, sesiones)
SELECT 'Informe Psiquiátrico', 50, 50, 3, '1', '1', 1
FROM dual
WHERE NOT EXISTS (
    SELECT 1 FROM precios WHERE descripcion = 'Informe Psiquiátrico' AND idClasificacion = 3
);
