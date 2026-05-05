CREATE TABLE `notas_credito` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `patient_id` bigint(20) unsigned NOT NULL,
  `idMembresia_origen` bigint(20) unsigned NOT NULL,
  `monto_original` decimal(10,2) NOT NULL DEFAULT '0.00',
  `monto_disponible` decimal(10,2) NOT NULL DEFAULT '0.00',
  `estado` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1: Disponible, 2: Gastado Totalmente, 3: Devuelto al paciente, 4: Anulado',
  `observaciones` text COLLATE utf8mb4_unicode_ci,
  `fecha_emision` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `notas_credito_patient_id_foreign` (`patient_id`),
  KEY `notas_credito_idmembresia_origen_foreign` (`idMembresia_origen`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
