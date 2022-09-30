import axios from "axios";

export const getTasks = async() => {
    try {
        const response = await axios({url: "http://localhost:3000/tasks", method: "get" })
        return response.data
    } catch (error) {
        console.log("error", error)
    }
}

export const deleteTasksService = async(id: any) => {
    try {
        const response = await axios({url: `http://localhost:3000/tasks/${id}`, method: "delete" })
        return response.data
    } catch (error) {
        console.log("error", error)
    }
}

export const createTasksService = async(data: any) => {
    try {
        const response = await axios({url: "http://localhost:3000/tasks", method: "post", data: data })
        return response.data
    } catch (error) {
        console.log("error", error)
    }
}

export const updateTasksService = async(data: any, id: any) => {
    try {
        const response = await axios({url: `http://localhost:3000/tasks/${id}`, method: "put", data: data })
        return response.data
    } catch (error) {
        console.log("error", error)
    }
}