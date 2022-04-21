import http from "src/services/http";

const getUsers = () => {
    return http.get(`/users`);
}

const service = { getUsers };

export default service;