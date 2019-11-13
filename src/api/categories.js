import apiRequests from "./agent";

const CategoriesRequests = {
    GetAll: () => apiRequests.get('/categories')
}

export default CategoriesRequests;