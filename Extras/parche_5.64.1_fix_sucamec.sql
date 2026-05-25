UPDATE precios SET paquete_tipo = NULL, paquete_especialidad = NULL, paquete_subtipo = NULL WHERE id IN (13, 14);
UPDATE precios SET paquete_tipo = 'otros', paquete_especialidad = 'hibrida', paquete_publico = NULL, paquete_subtipo = 'Sucamec inicial' WHERE id = 117;
UPDATE precios SET paquete_tipo = 'otros', paquete_especialidad = 'hibrida', paquete_publico = NULL, paquete_subtipo = 'Sucamec Continuo' WHERE id = 133;
