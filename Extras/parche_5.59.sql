-- =============================================
-- PARCHE: Módulo de Sedes
-- Descripción: Crea la tabla sedes y agrega columna idSede a tablas faltantes.
-- =============================================

-- 1. Crear tabla sedes
CREATE TABLE IF NOT EXISTS `sedes` (
    `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `nombre` VARCHAR(100) NOT NULL,
    `direccion` VARCHAR(255) NULL,
    `telefono` VARCHAR(20) NULL,
    `codigo` VARCHAR(20) NULL COMMENT 'Código interno (ej: eltambo, sancarlos)',
    `activo` TINYINT(1) NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Datos iniciales (respetar IDs existentes en users.idSede, payments.idSede, extra_payments.idSede)
INSERT INTO `sedes` (`id`, `nombre`, `codigo`, `activo`) VALUES 
(1, 'El Tambo', 'eltambo', 1),
(2, 'San Carlos', 'sancarlos', 1)
ON DUPLICATE KEY UPDATE `nombre` = VALUES(`nombre`);

-- 3. Agregar idSede a tablas que no lo tienen
ALTER TABLE `appointments` ADD COLUMN IF NOT EXISTS `idSede` INT(11) NOT NULL DEFAULT 1;
ALTER TABLE `schedules` ADD COLUMN IF NOT EXISTS `idSede` INT(11) NOT NULL DEFAULT 1;
ALTER TABLE `limbos` ADD COLUMN IF NOT EXISTS `idSede` INT(11) NOT NULL DEFAULT 1;
ALTER TABLE `membresias` ADD COLUMN IF NOT EXISTS `idSede` INT(11) NOT NULL DEFAULT 1;
ALTER TABLE `sos` ADD COLUMN IF NOT EXISTS `idSede` INT(11) NOT NULL DEFAULT 1;
ALTER TABLE `discharges` ADD COLUMN IF NOT EXISTS `idSede` INT(11) NOT NULL DEFAULT 1;

-- 4. Agregar idSede a deudas si existe la tabla
-- (verificar manualmente si la tabla deudas existe en tu base de datos)
-- ALTER TABLE `deudas` ADD COLUMN IF NOT EXISTS `idSede` INT(11) NOT NULL DEFAULT 1;

-- 5. Actualizar appointments existentes: asignar la sede del profesional que atendió
UPDATE `appointments` a
INNER JOIN `professionals` p ON a.professional_id = p.id
INNER JOIN `users` u ON p.user_id = u.id
SET a.idSede = u.idSede
WHERE a.idSede = 1 AND u.idSede != 1;

-- 6. Actualizar schedules existentes basado en el profesional
UPDATE `schedules` s
INNER JOIN `professionals` p ON s.professional_id = p.id
INNER JOIN `users` u ON p.user_id = u.id
SET s.idSede = u.idSede
WHERE s.idSede = 1 AND u.idSede != 1;

-- 7. Actualizar limbos basado en la cita
UPDATE `limbos` l
INNER JOIN `appointments` a ON l.appointment_id = a.id
SET l.idSede = a.idSede
WHERE l.idSede = 1 AND a.idSede != 1;
