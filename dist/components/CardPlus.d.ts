import React from 'react';
export interface CardPlusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CardPlus: {
    ({ size, className, ...props }: CardPlusProps): React.JSX.Element;
    displayName: string;
};
