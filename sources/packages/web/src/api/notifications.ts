import HttpBaseClient from "./common/HttpBaseClient";

export interface NotificationModel {
  id: number;
  title: string;
  description: string;
}

export class Notification extends HttpBaseClient {
  public async getNotifications(): Promise<NotificationModel[]> {
    try{
        const response = await this.apiClient.get(`notifications`);
        return response.data;
    }
    catch (error){
        this.handleRequestError(error);
        throw error;
    }
  }
}

export default Notification;