import React from 'react';
export interface AddBoxMultipleProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const AddBoxMultiple: {
    ({ size, className, ...props }: AddBoxMultipleProps): React.JSX.Element;
    displayName: string;
};
