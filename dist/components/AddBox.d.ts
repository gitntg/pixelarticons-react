import React from 'react';
export interface AddBoxProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const AddBox: {
    ({ size, className, ...props }: AddBoxProps): React.JSX.Element;
    displayName: string;
};
