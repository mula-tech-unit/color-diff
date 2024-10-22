import { RGBAColor, LabColor } from './convert';

export function mapPalette(a: RGBAColor[], b: RGBAColor[], type?: 'closest' | 'furthest', bc?: RGBAColor): { [key: string]: RGBAColor };
export function paletteMapKey(c: RGBAColor): string;
export function matchPaletteLab(targetColor: LabColor, palette: LabColor[], findFurthest?: boolean): LabColor;
export function mapPaletteLab(a: LabColor[], b: LabColor[], type?: 'closest' | 'furthest'): { [key: string]: LabColor };
export function labPaletteMapKey(c: LabColor): string;
export function mapPaletteN(a: RGBAColor[], b: (RGBAColor & {id: string})[], n: number, bc?: RGBAColor): { [key: string]: RGBAColor[] };
