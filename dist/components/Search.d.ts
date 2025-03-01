import React from 'react';
export interface SearchProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Search: {
    ({ size, className, ...props }: SearchProps): React.JSX.Element;
    displayName: string;
};
