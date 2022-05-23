import http from "src/services/http";

export const getUsers = () => {
    return http.get(`/users`);
}