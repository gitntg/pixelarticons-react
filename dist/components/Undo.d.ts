import React from 'react';
export interface UndoProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Undo: {
    ({ size, className, ...props }: UndoProps): React.JSX.Element;
    displayName: string;
};
