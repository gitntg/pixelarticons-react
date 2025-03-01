import React from 'react';
export interface AbTestingProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const AbTesting: {
    ({ size, className, ...props }: AbTestingProps): React.JSX.Element;
    displayName: string;
};
