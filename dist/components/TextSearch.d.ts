import React from 'react';
export interface TextSearchProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const TextSearch: {
    ({ size, className, ...props }: TextSearchProps): React.JSX.Element;
    displayName: string;
};
