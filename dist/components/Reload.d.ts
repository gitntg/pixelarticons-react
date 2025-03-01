import React from 'react';
export interface ReloadProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Reload: {
    ({ size, className, ...props }: ReloadProps): React.JSX.Element;
    displayName: string;
};
