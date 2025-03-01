import React from 'react';
export interface TextWrapProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const TextWrap: {
    ({ size, className, ...props }: TextWrapProps): React.JSX.Element;
    displayName: string;
};
