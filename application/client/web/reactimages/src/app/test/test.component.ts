import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})

export class TestComponent implements OnInit {
    public addentity:any = {
        created_date_at: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date_at: '',
        name: '',
    }

    constructor (
        private testService: TestService,
    ) { }

    ngOnInit() {
        this.addentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}