import React from 'react';
export interface TeaProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Tea: {
    ({ size, className, ...props }: TeaProps): React.JSX.Element;
    displayName: string;
};
