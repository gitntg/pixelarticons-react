import React from 'react';
export interface BookOpenProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const BookOpen: {
    ({ size, className, ...props }: BookOpenProps): React.JSX.Element;
    displayName: string;
};
