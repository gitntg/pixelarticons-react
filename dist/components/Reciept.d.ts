import React from 'react';
export interface RecieptProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Reciept: {
    ({ size, className, ...props }: RecieptProps): React.JSX.Element;
    displayName: string;
};
