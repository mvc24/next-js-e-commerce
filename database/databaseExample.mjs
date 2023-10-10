import dotenv from 'dotenv';
import postgres from 'postgres';
import { setEnvironmentVariables } from '../util/config.mjs';

dotenv.config();
setEnvironmentVariables();

const sql = postgres();
