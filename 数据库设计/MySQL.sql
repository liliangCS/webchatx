CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    nickname VARCHAR(50),
    password VARCHAR(255) NOT NULL,
    user_level TINYINT NOT NULL DEFAULT 0, -- 普通用户：0 管理员：1
    code_id INT, -- 注册码id
    last_online DATETIME,
    create_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reg_codes (
    code_id INT AUTO_INCREMENT PRIMARY KEY,
    reg_code VARCHAR(255) NOT NULL UNIQUE,
    total_count INT NOT NULL,
    cur_count INT NOT NULL DEFAULT 0,
    creator_id INT NOT NULL, -- 用户id
    created_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE chatrooms (
    chatroom_id INT AUTO_INCREMENT PRIMARY KEY,
    is_lock TINYINT NOT NULL DEFAULT 0, -- 不加密：0 加密：1
    chatroom_pwd VARCHAR(255),
    is_limit TINYINT NOT NULL DEFAULT 0, -- 不限制：0 限制：1
    max_size INT,
    online_members TEXT,
    creator_id INT NOT NULL, -- 用户id
    created_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE chat_records (
    record_id INT AUTO_INCREMENT PRIMARY KEY,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    content_str TEXT,
    emoji_str TEXT,
    is_img  TINYINT DEFAULT 0, -- 非图片消息：0  图片消息：1
    img_url VARCHAR(255),
    created_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);