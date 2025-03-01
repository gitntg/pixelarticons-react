import React from 'react';
export interface ViewColProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ViewCol: {
    ({ size, className, ...props }: ViewColProps): React.JSX.Element;
    displayName: string;
};
