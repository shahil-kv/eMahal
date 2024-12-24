import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { FilterService } from 'primeng/api';
import { Observable } from 'rxjs';
import { AppConfigService } from '../services/appConfig.service';

export class AppBase {
  pageSizeList = [10, 15, 20, 50];
  filterService: FilterService;
  requiredFld =
    '<span class="text-danger" style="font-size: 14px;vertical-align: middle;"> * </span>';
  _http: HttpClient;
  _appConfig: AppConfigService;
  constructor(injector: Injector) {
    this._http = injector.get(HttpClient);
    this._appConfig = injector.get(AppConfigService);
    this.filterService = injector.get(FilterService);
    this.dateFilter('dateFilter');
  }

  /**
   * @summary function for http client post requests
   * @author
   * @created
   * @param url {string} request url
   * @param data {object} request body
   * @returns {Observable<any>} request response
   */
  post(url: string, data: any): Observable<any> {
    return this._http.post(this._appConfig.getConfig() + url, data, {
      responseType: 'json',
    });
  }

  /**
   * @summary function for http client get request
   * @author
   * @created
   * @param url {string} request url
   * @param data {any} request parameters
   * @returns
   */
  get(url: string, data = null) {
    if (data) {
      return this._http.get<any>(this._appConfig.getConfig() + url, {
        params: data,
      });
    } else {
      return this._http.get<any>(this._appConfig.getConfig() + url);
    }
  }

  /**
   * @summary for date filter
   * @author
   * @created
   * @param dateFilter
   */
  dateFilter(dateFilter: string) {
    this.filterService.register(
      dateFilter,
      (value: Date, filter: Date): boolean => {
        value = new Date(value);
        return value.setHours(0, 0, 0, 0) == filter.setHours(0, 0, 0, 0);
      }
    );
  }

  /**
   * @summary to add domain url to path
   * @author
   * @created
   * @param path {string} path without domain
   * @returns {string} path with domain
   */
  appendToRemoteUrl(path: string): string {
    return this._appConfig.getConfigImg() + '' + path;
  }

  /**
   * @summary to get full path of file storage
   * @author
   * @created
   * @param {string} path path without domain
   * @returns {string} path with domain
   */
  appendToRemoteFileStorage(path: string): string {
    return this._appConfig.getRemoteFileStorage() + '' + path;
  }

  appendToUrl(path: string): string {
    return this._appConfig.getConfigImage() + '' + path;
  }

  groupData(objectArray: any, property: string) {
    let array: Array<object> = [];
    objectArray.reduce((acc: any, obj: any) => {
      const key = obj[property];
      let objItem: any = array.find((s: any) => s.key == key);
      !!objItem
        ? objItem['data'].push(obj)
        : array.push({ key: key, data: [obj] });
    }, {});
    return array;
  }

  dateConversion(date: String): any {
    return `${date}${date.split('.').length == 1 ? '.000' : ''}Z`;
  }

  onlyDateConversion(date: String): any {
    return `${date.split('T')[0]}T10:00:00.00Z`;
  }

  localToUtc(date: Date) {
    return new Date(date.toUTCString().replace('GMT', ''));
  }

  //   excelExport(id:any,   fileName:any) {
  //     let element = document.getElementById(id);
  //     const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
  //     const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  //     XLSX.writeFile(wb, fileName + '.xlsx');
  //   }

  getFileSize() {
    return this._appConfig.getMaxFileSize();
  }

  getFileSizeInMB() {
    return this._appConfig.getMaxFileSize() / 1024 / 1024;
  }
}
