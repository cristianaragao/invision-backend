const { request } = require("express");
const connection = require("../database/connection");
const moment = require("moment");

module.exports = {

    async index (request, response) {

        const { email, password, account_google } = request.body;
        
        const data = {
            user: null,
            logged: false,
        };

        let user = {};

        if(account_google){
            user = await connection("users").select("*").where({
                email: email,
            }).first();
        }
        else{
            user = await connection("users").select("*").where({
                email: email,
                password:  password,
            }).first();
        }

        if(user !== undefined){
            data.user = {
                name: user.name,
                email: user.email,
            };
            data.logged = true;
        }
    
        return response.json(data);
    },

    async create (request, response) {

        const { name, email, password } = request.body;

        const data = {
            created: false,
        }

        const user = await connection("users").select("*").where({
            email: email,
        }).first();

        
        if(!user){
            await connection("users").insert({
                email,
                name,
                password
            });

            data.created = true;
        }
    
        return response.json(data);
    },
    
}