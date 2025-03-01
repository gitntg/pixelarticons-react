import React from 'react';
export interface LightbulbProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Lightbulb: {
    ({ size, className, ...props }: LightbulbProps): React.JSX.Element;
    displayName: string;
};
