/*!
 * @license
 * Alfresco Example Content Application
 *
 * Copyright (C) 2005 - 2019 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Content Application.
 * If the software was purchased under a paid Alfresco license, the terms of
 * the paid license agreement will prevail.  Otherwise, the software is
 * provided under the following open source license terms:
 *
 * The Alfresco Example Content Application is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * The Alfresco Example Content Application is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {
  AppConfigService,
  AlfrescoApiService,
  StorageService
} from '@alfresco/adf-core';

@Injectable({
  providedIn: 'root'
})
export class AppAutomationService {
  constructor(
    private appConfigService: AppConfigService,
    private alfrescoApiService: AlfrescoApiService,
    private storageService: StorageService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  setup() {
    const adfProxy = window['adf'] || {};

    adfProxy.setConfigField = (field: string, value: string) => {
      this.appConfigService.config[field] = JSON.parse(value);
    };

    adfProxy.setStorageItem = (key: string, data: string) => {
      this.storageService.setItem(key, data);
    };

    adfProxy.clearStorage = () => {
      this.storageService.clear();
    };

    adfProxy.apiReset = () => {
      this.alfrescoApiService.reset();
    };

    adfProxy.navigateUrl = (url: string) => {
      this.ngZone.run(() => {
        this.router.navigateByUrl(url);
      });
    };

    window['adf'] = adfProxy;
  }
}
