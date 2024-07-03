export enum TASK_STATUS {
    PENDING = 'pending',
    IN_PROGRESS = 'in-progress',
    COMPLETED = 'completed'
}


export type TaskType= {
    title: string;
    description: string;
    status: TASK_STATUS;
    createdAt: Date;
}