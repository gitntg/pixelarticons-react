import React from 'react';
export interface TeachProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Teach: {
    ({ size, className, ...props }: TeachProps): React.JSX.Element;
    displayName: string;
};
