import axios from "axios";

export const getAcceptedRequests = async () => {
  return axios
    .get(`/manager/getAllAcceptedApartmentRequests`)
    .then((response) => {
      return response.data;
    });
};
export const getAllRequests = async () => {
  return axios.get(`/manager/getAllApartmentRequests`).then((response) => {
    return response.data;
  });
};
export const getRejectedRequests = async () => {
  return axios
    .get(`/manager/getAllRejectedApartmentRequests`)
    .then((response) => {
      return response.data;
    });
};
export const acceptApartmentRequest = async (id, startDate, endDate) => {
  return axios
    .put(`/manager/acceptApartmentRequest/${id}`, {
      startDate,
      endDate,
    })
    .then((response) => {
      return response.data;
    });
};
export const rejectApartmentRequest = async (id) => {
  return axios.put(`/manager/rejectApartmentRequest/${id}`).then((response) => {
    return response.data;
  });
};

export const getMaintenanceRequests = async () => {

  return axios.get(`/manager/maintenanceRequest`).then((response) => {
    return response.data;
  });
};

export const getAcceptedMaintenanceRequests = async () => {
  return axios.get(`/manager/maintenanceRequest/accepted`).then((response) => {
    return response.data;
  });
};
export const getRejectedMaintenanceRequests = async () => {
  return axios.get(`/manager/maintenanceRequest/rejected`).then((response) => {
    return response.data;
  });
};

export const acceptMaintenanceRequest = async (id) => {
  return axios
    .put(`/manager/maintenanceRequest/accepted/${id}`)
    .then((response) => {
      return response.data;
    });
};
export const rejectMaintenanceRequest = async (id) => {
  return axios
    .put(`/manager/maintenanceRequest/rejected/${id}`)
    .then((response) => {
      return response.data;
    });
};
export const deleteLeaseAgreement = async (id, leaseId) => {
  return axios
    .delete(`/manager/deleteLeaseAgreement/${id}`)
    .then((response) => {
      return response.data;
    });
};

export const getLeaseAgreement = async (id) => {
  return axios.get(`/manager/leaseAgreement/${id}`).then((response) => {
    return response.data;
  });
};
export const getAllLeaseAgreement = async () => {
  return axios.get(`/manager/getAllLeaseAgreement`).then((response) => {
    return response.data;
  });
};

export const getAllTenant = async () => {
  return axios.get(`/common/AllTenants`).then((response) => {
    return response.data;
  });
}

export const getAllPayment = async () => {
  return axios.get(`/manager/getAllPayments`).then((response) => {
    return response.data;
  });
}

