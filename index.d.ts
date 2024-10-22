import { RGBAColor, LabColor } from './lib/convert';

export type RGBAColorUc = {
    R: number;
    G: number;
    B: number;
    A?: number;
};

export type RGBAColorLc = {
    r: number;
    g: number;
    b: number;
    a?: number;
};

export type Color = RGBAColor | LabColor;
export type PaletteMap = { [key: string]: RGBAColor };
export type PaletteMapLab = { [key: string]: LabColor };

export function closest(target: RGBAColor, relative: RGBAColor[], bc?: RGBAColor): RGBAColor;
export function closestLab(target: LabColor, relative: LabColor[]): LabColor;
export function closestN(target: RGBAColor, relative: (RGBAColor & {id: string})[], n: number, bc?: RGBAColor): (RGBAColor & {score: number})[];
export function furthest(target: RGBAColor, relative: RGBAColor[], bc?: RGBAColor): RGBAColor;
export function furthestLab(target: LabColor, relative: LabColor[]): LabColor;

export function mapPalette(a: RGBAColor[], b: RGBAColor[], type?: 'closest' | 'furthest', bc?: RGBAColor): PaletteMap;
export function paletteMapKey(c: RGBAColor): string;
export function matchPaletteLab(targetColor: LabColor, palette: LabColor[], findFurthest?: boolean): LabColor;
export function mapPaletteLab(a: LabColor[], b: LabColor[], type?: 'closest' | 'furthest'): PaletteMapLab;
export function labPaletteMapKey(c: LabColor): string;

export { ciede2000 as diff } from './lib/diff';
export { rgbaToLab } from './lib/convert';

// Deprecated functions
export function rgb_to_lab(c: RGBAColor): LabColor;
export function rgba_to_lab(c: RGBAColor): LabColor;
export function map_palette(a: RGBAColor[], b: RGBAColor[], type?: 'closest' | 'furthest', bc?: RGBAColor): PaletteMap;
export function palette_map_key(c: RGBAColor): string;
export function match_palette_lab(targetColor: LabColor, palette: LabColor[], findFurthest?: boolean): LabColor;
export function map_palette_lab(a: LabColor[], b: LabColor[], type?: 'closest' | 'furthest'): PaletteMapLab;
export function lab_palette_map_key(c: LabColor): string;
export function closest_lab(target: LabColor, relative: LabColor[]): LabColor;
export function furthest_lab(target: LabColor, relative: LabColor[]): LabColor;
