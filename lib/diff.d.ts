import { RGBAColor, LabColor } from './convert';

export type Color = RGBAColor | LabColor;

export function ciede2000(c1: Color, c2: Color, bc?: RGBAColor): number;
