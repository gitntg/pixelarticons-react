import React from 'react';
export interface EditProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Edit: {
    ({ size, className, ...props }: EditProps): React.JSX.Element;
    displayName: string;
};
