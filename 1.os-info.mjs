//control + . en require
import { console } from 'node:inspector';
import { platform, release, cpus, uptime } from 'node:os';

console.log('Informacion del sistema operativo:')
console.log('----------------------------------')
console.log('Nombre del sistema operativo', platform());
console.log('Version del sistema operativo', release());
console.log('CPUs', cpus());
console.log('uptime:',uptime() /60/60)