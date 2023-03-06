"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, 'index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, 'about.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, 'contact.html'));
});
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
/* import http from 'http';
import fs from 'fs';

const about = fs.readFileSync('about.html');
const contact = fs.readFileSync('contact.html');
const homePage = fs.readFileSync('index.html');

const server = http.createServer((request, response) => {
    console.log(request.url);


    if (request.url === '/about') return response.end(about);
    if (request.url === '/contact') return response.end(contact);
    if (request.url === '/') return response.end(homePage);
    else (response.end('Page not found'))
});

server.listen(3000); */ 
