/**
 * Copyright 2017 The Mifos Initiative.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as office from './office.actions';
import {Error} from '../../../services/domain/error.model';

export interface State {
  error?: Error;
}

export const initialState: State = {};

export function reducer(state = initialState, action: office.Actions): State {
  switch (action.type) {

    case office.CREATE_FAIL:
    case office.UPDATE_FAIL:
      return {
        error: action.payload
      };

    case office.CREATE_SUCCESS:
    case office.UPDATE_SUCCESS:
      return {};

    default:
      return state;

  }
}
