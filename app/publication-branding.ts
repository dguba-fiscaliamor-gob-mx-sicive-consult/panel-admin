import {menuIcon} from './menu-icons';
export const escapeHtml=(s:string)=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
/** Changes presentation only; never rewrites the vehicle's published facts or QR. */
export function patchPublishedBranding(html:string,brand:{logo?:string;vehicle?:string;footerText:string}){
 if(!html.includes('SIPAC')||!html.includes('class="brandrow"')||!html.includes('class="footer"'))throw Error('La página no usa la plantilla SIPAC compatible.');
 html=html.replace(/<img class="brandlogo"[^>]*>|<strong>SIPAC<\/strong>/,brand.logo?`<img class="brandlogo" src="${escapeHtml(brand.logo)}" alt="SIPAC">`:'<strong>SIPAC</strong>');
 html=html.replace(/<img class="brandvehicle"[^>]*>/g,'');
 if(brand.vehicle)html=html.replace('<button class="menutoggle"',`<img class="brandvehicle" src="${escapeHtml(brand.vehicle)}" alt="Imagen de consulta"><button class="menutoggle"`);
 html=html.replace(/<span class="fieldicon">[\s\S]*?<\/span>/g,`<span class="fieldicon">${brand.vehicle?`<img class="fieldbadge" src="${escapeHtml(brand.vehicle)}" alt="">`:''}</span>`);
 html=html.replace(/(<footer class="footer">)<p[\s\S]*?<\/p>/,`$1<p style="white-space:pre-line">${escapeHtml(brand.footerText)}</p>`);
 const names=['home','check','user','key','pin'];let i=0;
 html=html.replace(/(<div class="navinner">)([\s\S]*?)(<\/div><\/nav>)/,(_,a,b,c)=>a+b.replace(/<svg[\s\S]*?<\/svg>/g,()=>menuIcon(names[i++]))+c);
 if(i!==5)throw Error('No se encontraron las cinco opciones del menú.');
 return html;
}
