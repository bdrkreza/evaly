import requests from './HttpService';

class StoresService {
  getStores(): Promise<any> {
    return requests.get('/store');
  }

  getStoreId(id: string): Promise<any> {
    return requests.get(`/store/${id}`);
  }

  addStore(body: {}): Promise<any> {
    return requests.post(`/store/`, body);
  }

  updateStore(id: string, body: {}): Promise<any> {
    return requests.patch(`/store/${id}`, body);
  }

  deleteStore(id: string): Promise<any> {
    return requests.delete(`/store/${id}`);
  }
}

export default new StoresService();
