import { AngularFireDatabase } from '@angular/fire/database';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  order$;

  constructor(private router: ActivatedRoute, private db: AngularFireDatabase ) { }

  ngOnInit() {
    let id = this.router.snapshot.paramMap.get('id');
    this.order$ = this.db.object('/products/' + id).valueChanges();
  }
  c(o){
    console.log(o);
  }
}
