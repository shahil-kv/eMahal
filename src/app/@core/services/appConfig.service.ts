import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {
  private appConfig: any;
  private appConfigData: any;
  private appConfigImage: any;
  private fileStorageUrl: any;
  private maxFileSize: any;
  private timeOut: any;
  private orginUrl: any;
  constructor(private http: HttpClient) {}

  loadAppConfig() {
    return this.http
      .get('assets/config.json')
      .toPromise()
      .then((data: any) => {
        this.appConfig = data.remoteUrl;
        this.appConfigData = data;
        this.appConfigImage = data.remoteFileUrl;
        this.fileStorageUrl = data.fileStorageUrl;
        this.maxFileSize = data.maxFileSize;
        this.timeOut = data.timeOut;
        this.orginUrl = data.originUrl;
      });
  }

  getConfig() {
    return this.appConfig;
  }
  getAppConfigData() {
    return this.appConfigData;
  }
  getConfigImg(): string {
    return this.fileStorageUrl;
  }

  getRemoteFileStorage(): string {
    return this.appConfigImage;
  }

  getConfigImage() {
    return this.appConfigImage;
  }

  getMaxFileSize() {
    return this.maxFileSize * 1048576;
  }

  getTimeOut() {
    return this.timeOut;
  }

  getOriginUrl() {
    return this.orginUrl;
  }
}
