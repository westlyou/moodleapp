// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Injectable } from '@angular/core';
import { CoreContentLinksModuleListHandler } from '@features/contentlinks/classes/module-list-handler';
import { makeSingleton } from '@singletons';
import { AddonModPage } from '../page';

/**
 * Handler to treat links to page list page.
 */
@Injectable({ providedIn: 'root' })
export class AddonModPageListLinkHandlerService extends CoreContentLinksModuleListHandler {

    name = 'AddonModPageListLinkHandler';

    constructor() {
        super('AddonModPage', 'page');
    }

    /**
     * Check if the handler is enabled on a site level.
     *
     * @param siteId The site ID.
     * @return Whether or not the handler is enabled on a site level.
     */
    isEnabled(siteId: string): Promise<boolean> {
        return AddonModPage.instance.isPluginEnabled(siteId);
    }

}

export class AddonModPageListLinkHandler extends makeSingleton(AddonModPageListLinkHandlerService) {}
