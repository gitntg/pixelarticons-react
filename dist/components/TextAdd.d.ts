import React from 'react';
export interface TextAddProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const TextAdd: {
    ({ size, className, ...props }: TextAddProps): React.JSX.Element;
    displayName: string;
};
