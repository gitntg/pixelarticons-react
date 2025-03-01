import React from 'react';
export interface LuggageProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Luggage: {
    ({ size, className, ...props }: LuggageProps): React.JSX.Element;
    displayName: string;
};
