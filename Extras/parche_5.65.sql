-- =========================================================
-- AGREGAR COLUMNA
-- =========================================================

ALTER TABLE appointments
ADD COLUMN attention_status VARCHAR(255) NULL AFTER status;


-- =========================================================
-- MIGRACIÓN DE DATOS
-- =========================================================

-- 1. status = 5 → 'atendido'
UPDATE appointments
SET attention_status = 'atendido'
WHERE attention_status IS NULL
  AND status = 5;


-- 2. status != 5 AND attention NOT NULL → 'atencion'
UPDATE appointments
SET attention_status = 'atencion'
WHERE attention_status IS NULL
  AND status != 5
  AND hora_inicio IS NOT NULL;


-- 3. status != 5 AND attention IS NULL AND entrance NOT NULL → 'espera'
UPDATE appointments
SET attention_status = 'espera'
WHERE attention_status IS NULL
  AND status != 5
  AND hora_inicio IS NULL
  AND hora_fin IS NOT NULL;
