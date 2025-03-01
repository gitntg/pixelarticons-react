import React from 'react';
export interface TabProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Tab: {
    ({ size, className, ...props }: TabProps): React.JSX.Element;
    displayName: string;
};
