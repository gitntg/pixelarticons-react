import React from 'react';
export interface ListBoxProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ListBox: {
    ({ size, className, ...props }: ListBoxProps): React.JSX.Element;
    displayName: string;
};
