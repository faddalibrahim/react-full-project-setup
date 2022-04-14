import axiosClient from "./apiClient";
import {
  LIST_ALL_TRUCKS,
  GET_TYRE_RECORD_BY_SERIAL_NUMBER,
  CREATE_A_TRUCK_TYRE,
  DELETE_A_TYRE,
  EDIT_A_TRUCK_TYRE,
} from "./apiEndPoints";

export function listAllTrucks(data = {}) {
  return axiosClient.post(LIST_ALL_TRUCKS, data);
}

export function getTyreRecordBySerialNumber(data) {
  return axiosClient.post(GET_TYRE_RECORD_BY_SERIAL_NUMBER, data);
}

export function createTruckTyre(data) {
  return axiosClient.post(CREATE_A_TRUCK_TYRE, data);
}

export function deleteATyre(tyreId) {
  return axiosClient.post(DELETE_A_TYRE, { tyreId });
}

export function editATyre(data) {
  return axiosClient.post(EDIT_A_TRUCK_TYRE, data);
}
