import React from 'react';
export interface DraftProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Draft: {
    ({ size, className, ...props }: DraftProps): React.JSX.Element;
    displayName: string;
};
