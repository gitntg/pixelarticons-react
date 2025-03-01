import React from 'react';
export interface MoveProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Move: {
    ({ size, className, ...props }: MoveProps): React.JSX.Element;
    displayName: string;
};
