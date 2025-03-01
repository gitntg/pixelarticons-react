import React from 'react';
export interface ListProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const List: {
    ({ size, className, ...props }: ListProps): React.JSX.Element;
    displayName: string;
};
