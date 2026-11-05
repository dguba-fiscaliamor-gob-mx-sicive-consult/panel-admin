export const defaultBrand={logo:'/branding/sipac-logo.png',vehicle:'/branding/vehiculo.png',showLogo:true,showVehicle:true,logoWidth:210,vehicleWidth:170,footerText:"Copyright © 2026 SIPAC. Derechos reservados."};
export type Brand=typeof defaultBrand;
export function imageSource(src:string){return src.startsWith('/branding/')?src:'/api/photos?key='+encodeURIComponent(src)}
