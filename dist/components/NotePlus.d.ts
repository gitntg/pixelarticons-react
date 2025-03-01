import React from 'react';
export interface NotePlusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const NotePlus: {
    ({ size, className, ...props }: NotePlusProps): React.JSX.Element;
    displayName: string;
};
