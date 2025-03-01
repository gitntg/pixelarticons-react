import React from 'react';
export interface AddColProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const AddCol: {
    ({ size, className, ...props }: AddColProps): React.JSX.Element;
    displayName: string;
};
