import React from 'react';
export interface KanbanProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Kanban: {
    ({ size, className, ...props }: KanbanProps): React.JSX.Element;
    displayName: string;
};
