import HttpBaseClient from './common/HttpBaseClient'

export default interface StudentModel{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: Date;
  }

export default class Student extends HttpBaseClient {
    public async getStudent(studentId: number): Promise<StudentModel | null> {
        try{
            const response = await this.apiClient.get(`students/${studentId}`);
            return response.data;
        }
        catch (error){
            this.handleRequestError(error);
            throw error;
        }
    }

    public async getStudents(): Promise<StudentModel[]> {
        try{
            const response = await this.apiClient.get(`students`);
            return response.data;
        }
        catch (error){
            this.handleRequestError(error);
            throw error;
        }
    }

    public async update(student: StudentModel): Promise<void> {
        try{
            const response = await this.apiClient.patch(`students`, student);
            return response.data;
        }
        catch (error){
            this.handleRequestError(error);
            throw error;
        }
    }
}