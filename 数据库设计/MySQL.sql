CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    nickname VARCHAR(50),
    password_hash VARCHAR(255) NOT NULL,
    user_level TINYINT NOT NULL DEFAULT 1, -- 管理员：0 普通用户：1
    last_online_time DATETIME,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    code_id INT -- 注册码id
);

CREATE TABLE registration_codes (
    code_id INT AUTO_INCREMENT PRIMARY KEY,
    registration_code VARCHAR(255) NOT NULL UNIQUE,
    total_usage_count INT NOT NULL,
    current_usage_count INT NOT NULL DEFAULT 0,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_id INT NOT NULL -- 用户id
);