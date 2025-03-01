import React from 'react';
export interface ChevronRightProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ChevronRight: {
    ({ size, className, ...props }: ChevronRightProps): React.JSX.Element;
    displayName: string;
};
