CREATE TABLE employee_attendances (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    user_id BIGINT UNSIGNED NULL,
    professional_id BIGINT UNSIGNED NULL,

    attendance_date DATE NOT NULL,

    check_in DATETIME NULL,
    check_out DATETIME NULL,

    worked_hours DECIMAL(8,2) DEFAULT 0,

    late_minutes INT DEFAULT 0,

    status ENUM(
        'Presente',
        'Tardanza',
        'Ausente',
        'Descanso',
        'Permiso'
    ) DEFAULT 'Presente',

    notes TEXT NULL,

    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_attendance_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_attendance_professional
        FOREIGN KEY (professional_id) REFERENCES professionals(id)
        ON DELETE CASCADE
);

CREATE TABLE professional_extra_schedules (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    professional_id BIGINT UNSIGNED NOT NULL,

    schedule_date DATE NOT NULL,

    start_time TIME NOT NULL,
    end_time TIME NOT NULL,

    total_hours DECIMAL(8,2) DEFAULT 0,

    status ENUM('Pendiente', 'Completado', 'Cancelado')
    DEFAULT 'Pendiente',

    notes TEXT NULL,

    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_extra_schedule_professional
        FOREIGN KEY (professional_id) REFERENCES professionals(id)
        ON DELETE CASCADE
);

CREATE TABLE employee_salary_configs (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    user_id BIGINT UNSIGNED NULL,
    professional_id BIGINT UNSIGNED NULL,

    base_salary DECIMAL(10,2) DEFAULT 0,

    discount_percentage DECIMAL(5,2) DEFAULT 0,

    afp_percentage DECIMAL(5,2) DEFAULT 0,

    late_discount_amount DECIMAL(10,2) DEFAULT 0,

    absence_discount_amount DECIMAL(10,2) DEFAULT 0,

    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_salary_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_salary_professional
        FOREIGN KEY (professional_id) REFERENCES professionals(id)
        ON DELETE CASCADE
);

CREATE TABLE employee_payrolls (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    user_id BIGINT UNSIGNED NULL,
    professional_id BIGINT UNSIGNED NULL,

    payroll_month INT NOT NULL,
    payroll_year INT NOT NULL,

    base_salary DECIMAL(10,2) DEFAULT 0,

    worked_days INT DEFAULT 0,

    late_count INT DEFAULT 0,
    absence_count INT DEFAULT 0,

    late_discount DECIMAL(10,2) DEFAULT 0,
    absence_discount DECIMAL(10,2) DEFAULT 0,

    extra_hours DECIMAL(8,2) DEFAULT 0,
    extra_hours_amount DECIMAL(10,2) DEFAULT 0,

    bonuses DECIMAL(10,2) DEFAULT 0,

    afp_percentage DECIMAL(5,2) DEFAULT 0,
    afp_amount DECIMAL(10,2) DEFAULT 0,

    other_discounts DECIMAL(10,2) DEFAULT 0,

    conciliation DECIMAL(10,2) DEFAULT 0,

    net_salary DECIMAL(10,2) DEFAULT 0,

    payment_status ENUM('No Pagado', 'Pagado')
    DEFAULT 'No Pagado',

    paid_at DATETIME NULL,

    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_payroll_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_payroll_professional
        FOREIGN KEY (professional_id) REFERENCES professionals(id)
        ON DELETE CASCADE
);

ALTER TABLE professionals

ADD COLUMN ctmp VARCHAR(255) NULL AFTER rne,

ADD COLUMN cnp VARCHAR(255) NULL AFTER ctmp,

ADD COLUMN colegiatura VARCHAR(255) NULL AFTER cnp;
