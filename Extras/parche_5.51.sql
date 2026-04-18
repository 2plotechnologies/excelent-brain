ALTER TABLE 'appointments' 
ADD COLUMN 'hora_inicio' TIME NULL AFTER 'recomendation';
ALTER TABLE 'appointments' 
ADD COLUMN 'hora_fin' TIME NULL AFTER 'hora_inicio';
ALTER TABLE 'appointments' 
ADD COLUMN 'duracion' DECIMAL(12,2) NULL AFTER 'hora_fin';