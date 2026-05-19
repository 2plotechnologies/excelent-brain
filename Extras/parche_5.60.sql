ALTER TABLE precios 
ADD COLUMN paquete_tipo VARCHAR(255) NULL AFTER `idClasificacion`;

ALTER TABLE precios 
ADD COLUMN paquete_especialidad VARCHAR(255) NULL AFTER `paquete_tipo`;

ALTER TABLE precios 
ADD COLUMN paquete_subtipo VARCHAR(255) NULL AFTER `paquete_especialidad`;

-- Primero, nos aseguramos que todos los registros tengan null en las nuevas columnas (por defecto de la migración)
UPDATE precios SET paquete_tipo = NULL, paquete_especialidad = NULL, paquete_subtipo = NULL;

-- 1. Paquetes Por Sesiones - Psicológica
-- Mapeando paquetes existentes de Niños y Adultos a "Psicológica"
UPDATE precios SET paquete_tipo = 'sesiones', paquete_especialidad = 'psicologica', paquete_subtipo = '6' WHERE id IN (31, 37); -- Niños/Adultos 6 sesiones
UPDATE precios SET paquete_tipo = 'sesiones', paquete_especialidad = 'psicologica', paquete_subtipo = '8' WHERE id IN (32, 38); -- Niños/Adultos 8 sesiones

-- Insertar paquete de 4 sesiones psicológica si no existe
INSERT INTO precios (descripcion, nuevos, continuos, especialMembresias, idClasificacion, sesiones, meses, servicio, activo, target_age, paquete_tipo, paquete_especialidad, paquete_subtipo)
SELECT 'Paquete Psicológico - 4 sesiones', 360, 360, 0, 5, 4, 0, 0, 1, 0, 'sesiones', 'psicologica', '4'
WHERE NOT EXISTS (SELECT 1 FROM precios WHERE paquete_tipo = 'sesiones' AND paquete_especialidad = 'psicologica' AND paquete_subtipo = '4');

-- 2. Paquetes Por Sesiones - Psiquiátrica
-- Mapeando "Paquete psiquiátrico adultos" (104) y "niños" (105) a 4 sesiones
UPDATE precios SET paquete_tipo = 'sesiones', paquete_especialidad = 'psiquiatrica', paquete_subtipo = '4' WHERE id IN (104, 105);

-- Insertar paquetes de 6 y 8 sesiones psiquiátricas si no existen
INSERT INTO precios (descripcion, nuevos, continuos, especialMembresias, idClasificacion, sesiones, meses, servicio, activo, target_age, paquete_tipo, paquete_especialidad, paquete_subtipo)
SELECT 'Paquete Psiquiátrico - 6 sesiones', 1200, 1200, 0, 5, 6, 0, 0, 1, 0, 'sesiones', 'psiquiatrica', '6'
WHERE NOT EXISTS (SELECT 1 FROM precios WHERE paquete_tipo = 'sesiones' AND paquete_especialidad = 'psiquiatrica' AND paquete_subtipo = '6');

INSERT INTO precios (descripcion, nuevos, continuos, especialMembresias, idClasificacion, sesiones, meses, servicio, activo, target_age, paquete_tipo, paquete_especialidad, paquete_subtipo)
SELECT 'Paquete Psiquiátrico - 8 sesiones', 1600, 1600, 0, 5, 8, 0, 0, 1, 0, 'sesiones', 'psiquiatrica', '8'
WHERE NOT EXISTS (SELECT 1 FROM precios WHERE paquete_tipo = 'sesiones' AND paquete_especialidad = 'psiquiatrica' AND paquete_subtipo = '8');

-- 3. Paquetes Por Sesiones - Nutricional
-- Insertar paquetes de 4, 6 y 8 sesiones nutricionales si no existen
INSERT INTO precios (descripcion, nuevos, continuos, especialMembresias, idClasificacion, sesiones, meses, servicio, activo, target_age, paquete_tipo, paquete_especialidad, paquete_subtipo)
SELECT 'Paquete Nutricional - 4 sesiones', 320, 320, 0, 5, 4, 0, 0, 1, 0, 'sesiones', 'nutricional', '4'
WHERE NOT EXISTS (SELECT 1 FROM precios WHERE paquete_tipo = 'sesiones' AND paquete_especialidad = 'nutricional' AND paquete_subtipo = '4');

INSERT INTO precios (descripcion, nuevos, continuos, especialMembresias, idClasificacion, sesiones, meses, servicio, activo, target_age, paquete_tipo, paquete_especialidad, paquete_subtipo)
SELECT 'Paquete Nutricional - 6 sesiones', 480, 480, 0, 5, 6, 0, 0, 1, 0, 'sesiones', 'nutricional', '6'
WHERE NOT EXISTS (SELECT 1 FROM precios WHERE paquete_tipo = 'sesiones' AND paquete_especialidad = 'nutricional' AND paquete_subtipo = '6');

INSERT INTO precios (descripcion, nuevos, continuos, especialMembresias, idClasificacion, sesiones, meses, servicio, activo, target_age, paquete_tipo, paquete_especialidad, paquete_subtipo)
SELECT 'Paquete Nutricional - 8 sesiones', 640, 640, 0, 5, 8, 0, 0, 1, 0, 'sesiones', 'nutricional', '8'
WHERE NOT EXISTS (SELECT 1 FROM precios WHERE paquete_tipo = 'sesiones' AND paquete_especialidad = 'nutricional' AND paquete_subtipo = '8');

-- 4. Paquetes Por Tiempo
-- Insertar paquetes por tiempo (15 y 30 días) para las diferentes especialidades
INSERT INTO precios (descripcion, nuevos, continuos, especialMembresias, idClasificacion, sesiones, meses, servicio, activo, target_age, paquete_tipo, paquete_especialidad, paquete_subtipo)
SELECT 'Paquete 15 Días - Psicológica', 500, 500, 0, 5, 0, 0, 0, 1, 0, 'tiempo', 'psicologica', '15'
WHERE NOT EXISTS (SELECT 1 FROM precios WHERE paquete_tipo = 'tiempo' AND paquete_especialidad = 'psicologica' AND paquete_subtipo = '15');

INSERT INTO precios (descripcion, nuevos, continuos, especialMembresias, idClasificacion, sesiones, meses, servicio, activo, target_age, paquete_tipo, paquete_especialidad, paquete_subtipo)
SELECT 'Paquete 30 Días - Psicológica', 900, 900, 0, 5, 0, 1, 0, 1, 0, 'tiempo', 'psicologica', '30'
WHERE NOT EXISTS (SELECT 1 FROM precios WHERE paquete_tipo = 'tiempo' AND paquete_especialidad = 'psicologica' AND paquete_subtipo = '30');

INSERT INTO precios (descripcion, nuevos, continuos, especialMembresias, idClasificacion, sesiones, meses, servicio, activo, target_age, paquete_tipo, paquete_especialidad, paquete_subtipo)
SELECT 'Paquete 15 Días - Psiquiátrica', 800, 800, 0, 5, 0, 0, 0, 1, 0, 'tiempo', 'psiquiatrica', '15'
WHERE NOT EXISTS (SELECT 1 FROM precios WHERE paquete_tipo = 'tiempo' AND paquete_especialidad = 'psiquiatrica' AND paquete_subtipo = '15');

INSERT INTO precios (descripcion, nuevos, continuos, especialMembresias, idClasificacion, sesiones, meses, servicio, activo, target_age, paquete_tipo, paquete_especialidad, paquete_subtipo)
SELECT 'Paquete 30 Días - Psiquiátrica', 1500, 1500, 0, 5, 0, 1, 0, 1, 0, 'tiempo', 'psiquiatrica', '30'
WHERE NOT EXISTS (SELECT 1 FROM precios WHERE paquete_tipo = 'tiempo' AND paquete_especialidad = 'psiquiatrica' AND paquete_subtipo = '30');

INSERT INTO precios (descripcion, nuevos, continuos, especialMembresias, idClasificacion, sesiones, meses, servicio, activo, target_age, paquete_tipo, paquete_especialidad, paquete_subtipo)
SELECT 'Paquete 15 Días - Nutricional', 300, 300, 0, 5, 0, 0, 0, 1, 0, 'tiempo', 'nutricional', '15'
WHERE NOT EXISTS (SELECT 1 FROM precios WHERE paquete_tipo = 'tiempo' AND paquete_especialidad = 'nutricional' AND paquete_subtipo = '15');

INSERT INTO precios (descripcion, nuevos, continuos, especialMembresias, idClasificacion, sesiones, meses, servicio, activo, target_age, paquete_tipo, paquete_especialidad, paquete_subtipo)
SELECT 'Paquete 30 Días - Nutricional', 550, 550, 0, 5, 0, 1, 0, 1, 0, 'tiempo', 'nutricional', '30'
WHERE NOT EXISTS (SELECT 1 FROM precios WHERE paquete_tipo = 'tiempo' AND paquete_especialidad = 'nutricional' AND paquete_subtipo = '30');


-- 5. Sucamec
-- Actualizamos el existente
UPDATE precios SET paquete_tipo = 'sucamec', paquete_especialidad = NULL, paquete_subtipo = 'nuevo' WHERE id = 117;

-- Insertamos el de renovación si no existe
INSERT INTO precios (descripcion, nuevos, continuos, especialMembresias, idClasificacion, sesiones, meses, servicio, activo, target_age, paquete_tipo, paquete_especialidad, paquete_subtipo)
SELECT 'Sucamec - Renovación', 150, 150, 0, 9, 1, 1, 0, 1, 0, 'sucamec', NULL, 'renovacion'
WHERE NOT EXISTS (SELECT 1 FROM precios WHERE paquete_tipo = 'sucamec' AND paquete_subtipo = 'renovacion');
