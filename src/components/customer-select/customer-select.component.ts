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

import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {CustomerService} from '../../services/customer/customer.service';
import {FetchRequest} from '../../services/domain/paging/fetch-request.model';
import {CustomerPage} from '../../services/customer/domain/customer-page.model';
import {Observable} from 'rxjs/Observable';
import {Customer} from '../../services/customer/domain/customer.model';

@Component({
  selector: 'fims-customer-select',
  templateUrl: './customer-select.component.html'
})
export class CustomerSelectComponent implements OnInit{

  @Input() title: string;

  @Input() preSelection: string[];

  @Output() onSelectionChange: EventEmitter<any> = new EventEmitter();

  customers: Observable<Customer[]>;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.onSearch()
  }

  onSearch(searchTerm?: string): void{
    let fetchRequest: FetchRequest = {
      page: {
        pageIndex: 0,
        size: 5
      },
      searchTerm: searchTerm
    };
    this.customers = this.customerService.fetchCustomers(fetchRequest).map((customerPage: CustomerPage) => customerPage.customers);
  }

  selectionChange(selections: string[]): void{
    this.onSelectionChange.emit(selections);
  }

}
