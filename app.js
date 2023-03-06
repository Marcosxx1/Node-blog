"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.static(path_1.default.join(__dirname, 'pages')));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, 'pages/index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, 'pages/about.html'));
});
app.get('/post', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, 'pages/post.html'));
});
app.get('/index', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, 'pages/index.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, 'pages/contact.html'));
});
exports.default = app;
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
