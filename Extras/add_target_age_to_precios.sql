-- Agregar la columna target_age (0: Ambos, 1: Niños, 2: Adultos).
ALTER TABLE precios ADD COLUMN target_age TINYINT DEFAULT 0 COMMENT '0: Ambos, 1: Niños, 2: Adultos';

-- Auto-asignar valor basado en el nombre del servicio.
UPDATE precios SET target_age = 1 WHERE descripcion LIKE '%niño%' OR descripcion LIKE '%niña%' OR descripcion LIKE '%infantil%';
UPDATE precios SET target_age = 2 WHERE descripcion LIKE '%adulto%';
