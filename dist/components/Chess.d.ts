import React from 'react';
export interface ChessProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Chess: {
    ({ size, className, ...props }: ChessProps): React.JSX.Element;
    displayName: string;
};
