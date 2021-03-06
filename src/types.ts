import * as React from 'react';
import { LayoutStyleProperties } from './styleTransformers/transformLayoutStyleProperties';
import { YogaStyleProperties } from './yoga/YogaStyleProperties';
import { TextStyleProperties } from './styleTransformers/transformTextStyleProperties';
import { BlendStyleProperties } from './styleTransformers/transformBlendProperties';
import { GeometryStyleProperties } from './styleTransformers/transformGeometryStyleProperties';
import { BorderStyleProperties } from './styleTransformers/transformBorderProperties';
export type Color = string;

export type StyleOf<T> = Partial<T> | Partial<T>[];

export interface BaseNodeProps {
    name?: string;
    pluginData?: {
        [key: string]: string;
    };
    sharedPluginData?: {
        [namespace: string]: {
            [key: string]: string;
        };
    };
}

export interface LayoutProps {
    relativeTransform?: Transform;
    x?: number;
    y?: number;
    rotation?: number;
    width?: number;
    height?: number;
    isWithoutConstraints?: boolean;
    layoutAlign?: 'MIN' | 'CENTER' | 'MAX' | 'STRETCH';
}

export interface ChildrenProps {
    children?: React.ReactNode;
}

export interface GeometryProps {
    fills?: ReadonlyArray<Paint> | symbol;
    strokes?: ReadonlyArray<Paint>;
    strokeWeight?: number;
    strokeAlign?: 'CENTER' | 'INSIDE' | 'OUTSIDE';
    strokeCap?: StrokeCap | symbol;
    strokeJoin?: StrokeJoin | symbol;
    dashPattern?: ReadonlyArray<number>;
    fillStyleId?: string | symbol;
    strokeStyleId?: string;
}

export interface FrameProps {
    backgrounds?: ReadonlyArray<Paint>;
}

export interface CornerProps {
    cornerRadius?: number | symbol;
    cornerSmoothing?: number;
}

export interface BorderProps {
    topLeftRadius?: number;
    topRightRadius?: number;
    bottomLeftRadius?: number;
    bottomRightRadius?: number;
}

export interface ExportProps {
    exportSettings?: ReadonlyArray<ExportSettings>;
    exportAsyncSettings?: ExportSettings;
    exportAsyncCallback?: (result: Uint8Array) => any;
}

export interface BlendProps {
    opacity?: number;
    blendMode?: BlendMode;
    isMask?: boolean;
    effects?: ReadonlyArray<Effect>;
    effectStyleId?: string;
}

export interface TextNodeProps {
    characters?: string;
    textAlignHorizontal?: 'LEFT' | 'CENTER' | 'RIGHT' | 'JUSTIFIED';
    textAlignVertical?: 'TOP' | 'CENTER' | 'BOTTOM';
    textAutoResize?: 'NONE' | 'WIDTH_AND_HEIGHT' | 'HEIGHT';
    paragraphIndent?: number;
    paragraphSpacing?: number;
    autoRename?: boolean;

    fontSize?: number | symbol;
    fontName?: FontName;
    textCase?: TextCase | symbol;
    textDecoration?: TextDecoration | symbol;
    letterSpacing?: LetterSpacing | symbol;
    lineHeight?: LineHeight | symbol;
}

export interface VectorNodeProps {
    vectorPaths?: VectorPaths;
    vectorNetwork?: VectorNetwork;
    handleMirroring?: HandleMirroring | symbol;
}

export interface StarNodeProps {
    pointCount?: number;
    innerRadius?: number;
}

export interface InstanceItemProps {
    node?: any;
    preventResizing?: boolean;
}

export interface DefaultShapeProps extends BaseNodeProps, LayoutProps, GeometryProps, ExportProps, BlendProps {}

export interface DefaultContainerProps
    extends BaseNodeProps,
        ChildrenProps,
        LayoutProps,
        ExportProps,
        BlendProps,
        FrameProps {}

export type CommonStyle = LayoutStyleProperties &
    YogaStyleProperties &
    TextStyleProperties &
    BlendStyleProperties &
    GeometryStyleProperties &
    BorderStyleProperties;

export interface SelectionEventProps {
    onSelectionEnter?: (() => void) | void;
    onSelectionLeave?: (() => void) | void;
}

export interface ChangePageEventProps {
    onCurrentChange?: (isCurrent: boolean) => void;
}

export interface AutoLayoutProps {
    layoutMode?: 'NONE' | 'HORIZONTAL' | 'VERTICAL';
    counterAxisSizingMode?: 'FIXED' | 'AUTO';
    horizontalPadding?: number;
    verticalPadding?: number;
    itemSpacing?: number;
    constraints?: Constraints;
}
