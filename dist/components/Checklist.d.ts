import React from 'react';
export interface ChecklistProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Checklist: {
    ({ size, className, ...props }: ChecklistProps): React.JSX.Element;
    displayName: string;
};
