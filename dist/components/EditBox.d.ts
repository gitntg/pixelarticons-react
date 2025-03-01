import React from 'react';
export interface EditBoxProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const EditBox: {
    ({ size, className, ...props }: EditBoxProps): React.JSX.Element;
    displayName: string;
};
