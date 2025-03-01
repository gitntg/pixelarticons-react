import React from 'react';
export interface BuildingsProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Buildings: {
    ({ size, className, ...props }: BuildingsProps): React.JSX.Element;
    displayName: string;
};
