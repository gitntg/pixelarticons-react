import React from 'react';
export interface MonitorProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Monitor: {
    ({ size, className, ...props }: MonitorProps): React.JSX.Element;
    displayName: string;
};
