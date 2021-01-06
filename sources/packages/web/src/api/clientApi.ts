import Student from "./student"
import Notification from "./notifications"

const api = {
    student: new Student(),
    notifications: new Notification()
}

export default api;