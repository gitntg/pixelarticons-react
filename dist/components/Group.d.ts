import React from 'react';
export interface GroupProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Group: {
    ({ size, className, ...props }: GroupProps): React.JSX.Element;
    displayName: string;
};
