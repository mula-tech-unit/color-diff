export interface XYZColor {
    X: number;
    Y: number;
    Z: number;
}

export interface RGBAColor {
    R?: number;
    G?: number;
    B?: number;
    A?: number;
    r?: number;
    g?: number;
    b?: number;
    a?: number;
    id?: string;
}

export interface RGBAColorUc {
    R: number;
    G: number;
    B: number;
    A?: number;
    id?: string;
}

export interface LabColor {
    L: number;
    a: number;
    b: number;
    id?: string;
}

export function rgbaToLab(c: RGBAColor, bc?: RGBAColor): LabColor;
export function normalize(c: RGBAColor): RGBAColorUc;
