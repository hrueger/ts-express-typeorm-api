const fs = require("fs");
const path = require("path");
const content = 'export const config = { defaultLanguage: "en", database_host: "", database_name: "", database_password: "", database_port: 3306, database_user: "", port: 80, jwtSecret: ""};';
fs.writeFileSync(path.join(__dirname, "../config/config.ts"), content);
