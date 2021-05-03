const { request } = require("express");
const connection = require("../database/connection");
const moment = require("moment");

const env = require('dotenv').config();

console.log(env);

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
            
            if(email === ''){
                return response.status(400).json({ error: 'Email cannot be empty.' });
            }

            if(email.length - 1 === '@'){
                return response.status(400).json({ error: 'Email cannot be empty.' });
            }

            const emailValidate = email.split('@');

            if(emailValidate.length <= 1){
                return response.status(400).json({ error: 'Invalid Email.' });
            }
            
            const partFinalEmailValidate = emailValidate[1].split('.');

            if(emailValidate.length <= 1 || partFinalEmailValidate.length <= 1){
                return response.status(400).json({ error: 'Invalid Email.' });
            }

            if(password === ''){
                return response.status(400).json({ error: 'Password cannot be empty.' });
            }

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

        const { name, email, password, account_google } = request.body;

        const data = {
            created: false,
        }

        if(!account_google){

            if(name === ''){
                response.status(400).json({ error: 'Name cannot be empty.' });
                return;
            }
    
            const nameFull = name.split(' ');
            
            if(nameFull.length === 1){
                response.status(400).json({ error: 'Name must have at least first and last name.' });
                return;
            }
    
            const emailValidate = email.split('@');
    
            const partFinalEmailValidate = emailValidate[1].split('.');
    
            if(emailValidate.length <= 1 || partFinalEmailValidate.length <= 1){
                response.status(400).json({ error: 'Invalid Email.' });
                return;
            }
    
            if(password.length < 6){
                response.status(400).json({ error: 'Password must be 6 or more characters.' });
                return;
            }
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