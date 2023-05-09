#!/usr/bin/env node

import minimist from "minimist";
import express, { json, urlencoded } from "express";
import { rps, rpsls } from './lib/rpsls.js'

