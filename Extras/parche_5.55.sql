CREATE TABLE IF NOT EXISTS patient_questionnaire_links (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    patient_id BIGINT NOT NULL,
    token VARCHAR(255) NOT NULL,
    expires_at DATETIME,
    used_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS patient_questionnaire_answers (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    patient_id BIGINT NOT NULL,
    link_id BIGINT NOT NULL,
    answers LONGTEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);