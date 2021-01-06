export interface RootState { }

export interface AuthState {
    isAuthenticated: boolean;
    userName: string;
    roles: string[],
    token: string | null
}

export interface Notification {
    id: number,
    title: string,
    description: string
};

export interface NotificationState{
    notifications: Notification[];
}