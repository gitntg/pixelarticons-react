import React from 'react';
export interface LightbulbOnProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const LightbulbOn: {
    ({ size, className, ...props }: LightbulbOnProps): React.JSX.Element;
    displayName: string;
};
