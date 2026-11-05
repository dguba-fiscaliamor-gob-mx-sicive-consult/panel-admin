export function expiryDate(issuedOn:string){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(issuedOn))throw Error('Indica una fecha de expedición válida.');
 const d=new Date(issuedOn+'T12:00:00Z');
 if(!Number.isFinite(d.getTime())||d.toISOString().slice(0,10)!==issuedOn)throw Error('Fecha de expedición inválida.');
 d.setUTCDate(d.getUTCDate()+20);return d.toISOString().slice(0,10);
}
export function displayDate(value:string){return value?new Date(value+'T12:00:00Z').toLocaleDateString('es-MX',{timeZone:'UTC',day:'numeric',month:'long',year:'numeric'}):'Sin definir'}
