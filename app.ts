import path from 'path';
import express, { Request, response, Response } from 'express';

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})


app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'contact.html'))
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})














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