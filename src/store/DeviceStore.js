/** @format */

import { makeAutoObservable } from 'mobx';

class DeviceStore {
  constructor() {
    this._types = [{ id: 1, name: 'fridges', id: 2, name: 'Phones' }];
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
    ];
    this._devices = [{ id: 1, name: 'I pro', price: 20000, rating: 5, img: `` }];
    this._devices = [{ id: 1, name: 'I pro', price: 20000, rating: 5, img: `` }];
    this._devices = [{ id: 1, name: 'I pro', price: 20000, rating: 5, img: `` }];
    this._devices = [{ id: 1, name: 'I pro', price: 20000, rating: 5, img: `` }];
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
}

export { DeviceStore };
