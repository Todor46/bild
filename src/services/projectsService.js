import http from "./httpService";
import { API } from "../constants/api";

export function getProjectsByNumber(n) {
  return http.get(`${API}/projects?_limit=${n}`);
}

export function getProjectsFiltered(query) {
  return http.get(`${API}/projects?${query}`);
}
