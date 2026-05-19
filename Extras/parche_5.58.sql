-- Auto-asignar valor basado en el nombre del servicio.
UPDATE precios SET target_age = 1 WHERE descripcion LIKE '%niño%' OR descripcion LIKE '%niña%' OR descripcion LIKE '%infantil%';
UPDATE precios SET target_age = 2 WHERE descripcion LIKE '%adulto%';