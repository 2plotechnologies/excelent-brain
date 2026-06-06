-- =========================================================
-- AGREGAR COLUMNA.
-- =========================================================

ALTER TABLE precios
ADD COLUMN duracion INT NULL;

-- =========================================================
-- ACTUALIZAR DURACIONES.
-- =========================================================

UPDATE precios
SET duracion = CASE
    WHEN servicio = 0 THEN 0
    WHEN servicio = 1
         AND idClasificacion = 1
         AND descripcion LIKE '%Lectura de resultados%'
        THEN 15
    WHEN servicio = 1
         AND idClasificacion = 1
        THEN 45
    WHEN servicio = 1
         AND idClasificacion = 2
        THEN 60
    ELSE duracion
END;
