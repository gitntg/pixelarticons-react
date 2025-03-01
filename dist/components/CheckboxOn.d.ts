import React from 'react';
export interface CheckboxOnProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CheckboxOn: {
    ({ size, className, ...props }: CheckboxOnProps): React.JSX.Element;
    displayName: string;
};
