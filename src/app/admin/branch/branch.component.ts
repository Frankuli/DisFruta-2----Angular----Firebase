import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],
})
export class BranchComponent implements OnInit {
  constructor(private router: Router, private db: AngularFireDatabase) {}

  save(product) {
    this.db.list('/branch').push(product);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {}
}
