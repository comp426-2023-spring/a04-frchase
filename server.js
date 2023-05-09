#!/usr/bin/env node

import minimist from "minimist";
import express, { json, urlencoded } from "express";
import { rps, rpsls } from './lib/rpsls.js'

const args = minimist(process.argv.slice(2));
const port = args.port || 5000;
const app = express();

app.use(json());
app.user(urlencoded({ extended: true}));

app.get('/app', (req, res) => {
	res.status(200).send("200 OK")
})

app.get('/app/rps', (req, res) => {
	res.status(200).send(JSON.stringify(rps(req.body.shot)))
})

app.get('/app/rpsls', (req, res) => {
	res.status(200).send(JSON.stringify(rpsls(req.body.shot)))
})