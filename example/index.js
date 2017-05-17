import { version, name } from './package.json';
import './styles.scss';

export default function(yourName) {
    const yo = 'true';
    const world = { what: true };
    const hello = { ...world, yo };
    console.log(hello);
    return `Hello ${yourName}! It's ${name}-v${version}`;
}
