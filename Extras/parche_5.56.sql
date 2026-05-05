ALTER TABLE archivos add tipo VARCHAR(50) DEFAULT 'otros' NULL AFTER fecha;

INSERT INTO `precios_clasificacion` (`clasificacion`) VALUES ('Sucamec');

INSERT INTO `precios` (`descripcion`, `nuevos`, `continuos`, `especialMembresias`, `idClasificacion`, `sesiones`, `meses`, `servicio`, `activo`) VALUES ('Sucamec', '190', '170', '0', '9', '1', '1', '0', '1');