import { config } from 'dotenv-safe';
import { add } from '@src/math/add';

config();

const test = add(1, 2);
console.log('test :>> ', test);
