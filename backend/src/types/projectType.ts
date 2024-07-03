

export enum PROJECT_STATUS {
    NOT_STARTED = 'not_started',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed',
}

export type ProjectType =  {
    name: string;
    description: string;
    status: PROJECT_STATUS;
    assignedUsers: string[];
    createdAt: Date;
}