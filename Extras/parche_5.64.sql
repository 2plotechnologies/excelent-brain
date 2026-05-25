ALTER TABLE precios ADD COLUMN paquete_publico VARCHAR(50) NULL;

-- 1. Primero, nos aseguramos que todos los registros tengan null en las nuevas columnas
UPDATE precios SET paquete_tipo = NULL, paquete_especialidad = NULL, paquete_publico = NULL, paquete_subtipo = NULL;

-- 2. TIPO: POR SESIONES
-- Especialidad: Psicológica - Niños
UPDATE precios SET paquete_tipo = 'sesiones', paquete_especialidad = 'psicologica', paquete_publico = 'ninos', paquete_subtipo = '6' WHERE id = 31;
UPDATE precios SET paquete_tipo = 'sesiones', paquete_especialidad = 'psicologica', paquete_publico = 'ninos', paquete_subtipo = '8' WHERE id = 32;
UPDATE precios SET paquete_tipo = 'sesiones', paquete_especialidad = 'psicologica', paquete_publico = 'ninos', paquete_subtipo = '10' WHERE id = 33;
UPDATE precios SET paquete_tipo = 'sesiones', paquete_especialidad = 'psicologica', paquete_publico = 'ninos', paquete_subtipo = '12' WHERE id = 34;

-- Especialidad: Psicológica - Adultos
UPDATE precios SET paquete_tipo = 'sesiones', paquete_especialidad = 'psicologica', paquete_publico = 'adultos', paquete_subtipo = '6' WHERE id = 37;
UPDATE precios SET paquete_tipo = 'sesiones', paquete_especialidad = 'psicologica', paquete_publico = 'adultos', paquete_subtipo = '8' WHERE id = 38;
UPDATE precios SET paquete_tipo = 'sesiones', paquete_especialidad = 'psicologica', paquete_publico = 'adultos', paquete_subtipo = '10' WHERE id = 39;
UPDATE precios SET paquete_tipo = 'sesiones', paquete_especialidad = 'psicologica', paquete_publico = 'adultos', paquete_subtipo = '12' WHERE id = 40;

-- Especialidad: Psiquiátrica (Adultos y Niños) no tienen opciones según la tabla, así que no se mapean por ahora.

-- 3. TIPO: POR TIEMPO
-- Especialidad: Psicológica (Ambos públicos comparten los mismos paquetes en BD)
UPDATE precios SET paquete_tipo = 'tiempo', paquete_especialidad = 'psicologica', paquete_publico = 'ambos', paquete_subtipo = 'Clinica de dia' WHERE id = 3;
UPDATE precios SET paquete_tipo = 'tiempo', paquete_especialidad = 'psicologica', paquete_publico = 'ambos', paquete_subtipo = 'Clinica de dia (medio tiempo)' WHERE id = 74;
UPDATE precios SET paquete_tipo = 'tiempo', paquete_especialidad = 'psicologica', paquete_publico = 'ambos', paquete_subtipo = 'Clinica de dia - M2' WHERE id = 84;
UPDATE precios SET paquete_tipo = 'tiempo', paquete_especialidad = 'psicologica', paquete_publico = 'ambos', paquete_subtipo = 'Kurame' WHERE id = 15;
UPDATE precios SET paquete_tipo = 'tiempo', paquete_especialidad = 'psicologica', paquete_publico = 'ambos', paquete_subtipo = 'Kurame M1' WHERE id = 54;
UPDATE precios SET paquete_tipo = 'tiempo', paquete_especialidad = 'psicologica', paquete_publico = 'ambos', paquete_subtipo = 'Kurame M2' WHERE id = 30;
UPDATE precios SET paquete_tipo = 'tiempo', paquete_especialidad = 'psicologica', paquete_publico = 'ambos', paquete_subtipo = 'Kurame M3' WHERE id = 46;

-- Especialidad: Psiquiátrica (Ambos públicos comparten los mismos paquetes en BD)
-- Como no existían paquetes llamados "Clinica de dia psiquiatrica" o "Kurame psiquiatrica", creamos registros si no existen.
INSERT INTO precios (descripcion, nuevos, continuos, especialMembresias, idClasificacion, sesiones, meses, servicio, activo, target_age, paquete_tipo, paquete_especialidad, paquete_publico, paquete_subtipo)
SELECT 'Clínica de Día - Psiquiátrica', 500, 500, 0, 5, 0, 1, 0, 1, 0, 'tiempo', 'psiquiatrica', 'ambos', 'Clinica de dia'
WHERE NOT EXISTS (SELECT 1 FROM precios WHERE paquete_tipo = 'tiempo' AND paquete_especialidad = 'psiquiatrica' AND paquete_subtipo = 'Clinica de dia');

INSERT INTO precios (descripcion, nuevos, continuos, especialMembresias, idClasificacion, sesiones, meses, servicio, activo, target_age, paquete_tipo, paquete_especialidad, paquete_publico, paquete_subtipo)
SELECT 'Kurame - Psiquiátrica', 800, 800, 0, 5, 0, 1, 0, 1, 0, 'tiempo', 'psiquiatrica', 'ambos', 'Kurame'
WHERE NOT EXISTS (SELECT 1 FROM precios WHERE paquete_tipo = 'tiempo' AND paquete_especialidad = 'psiquiatrica' AND paquete_subtipo = 'Kurame');

-- 4. TIPO: OTROS PAQUETES
-- Especialidad: Psicológica
UPDATE precios SET paquete_tipo = 'otros', paquete_especialidad = 'psicologica', paquete_publico = NULL, paquete_subtipo = 'Orientacion vocacional' WHERE id = 16;
UPDATE precios SET paquete_tipo = 'otros', paquete_especialidad = 'psicologica', paquete_publico = NULL, paquete_subtipo = 'Paquete Judicial Psicologico' WHERE id = 66;
UPDATE precios SET paquete_tipo = 'otros', paquete_especialidad = 'psicologica', paquete_publico = NULL, paquete_subtipo = 'Paquete Judicial Psicologico Especial' WHERE id = 83;

-- Especialidad: Psiquiátrica
UPDATE precios SET paquete_tipo = 'otros', paquete_especialidad = 'psiquiatrica', paquete_publico = NULL, paquete_subtipo = 'Paquete Judicial Psiquiatrico' WHERE id = 67;

-- Especialidad: Híbrida
UPDATE precios SET paquete_tipo = 'otros', paquete_especialidad = 'hibrida', paquete_publico = NULL, paquete_subtipo = 'Sucamec inicial' WHERE id = 13;
UPDATE precios SET paquete_tipo = 'otros', paquete_especialidad = 'hibrida', paquete_publico = NULL, paquete_subtipo = 'Sucamec Continuo' WHERE id = 14;

-- Especialidad: Otros
UPDATE precios SET paquete_tipo = 'otros', paquete_especialidad = 'otros', paquete_publico = NULL, paquete_subtipo = 'Taller DBT' WHERE id = 79;
UPDATE precios SET paquete_tipo = 'otros', paquete_especialidad = 'otros', paquete_publico = NULL, paquete_subtipo = 'Taller Divertimente' WHERE id = 71;
