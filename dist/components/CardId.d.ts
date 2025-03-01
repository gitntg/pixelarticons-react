import React from 'react';
export interface CardIdProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CardId: {
    ({ size, className, ...props }: CardIdProps): React.JSX.Element;
    displayName: string;
};
