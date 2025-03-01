import React from 'react';
export interface DragAndDropProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const DragAndDrop: {
    ({ size, className, ...props }: DragAndDropProps): React.JSX.Element;
    displayName: string;
};
