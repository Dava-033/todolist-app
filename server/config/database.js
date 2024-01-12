import { Sequelize } from "sequelize";

const db = new Sequelize('DFEProject_pagepolice', 'DFEProject_pagepolice', 'e13186a3571c77a9f4100b84cfd3fdd20dcf2148', {
    host: 'znk.h.filess.io',
    dialect: 'mysql',
    port: 3307, // Perbarui port jika diperlukan
});

export default db;
//test