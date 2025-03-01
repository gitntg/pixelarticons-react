import React from 'react';
export interface AndroidProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Android: {
    ({ size, className, ...props }: AndroidProps): React.JSX.Element;
    displayName: string;
};
