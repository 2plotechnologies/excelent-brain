-- Agregar la columna target_age (0: Ambos, 1: Niños, 2: Adultos).
ALTER TABLE precios ADD COLUMN target_age TINYINT DEFAULT 0 COMMENT '0: Ambos, 1: Niños, 2: Adultos';
