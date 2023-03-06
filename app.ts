
import path from 'path';
import express, { Request, response, Response } from 'express';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'pages')));


app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'));
}) 

app.get('/about', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'))
}) 

app.get('/post', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, 'pages/post.html'))
})

app.get('/index', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'))
})

app.get('/contact', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
})

export default app;















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