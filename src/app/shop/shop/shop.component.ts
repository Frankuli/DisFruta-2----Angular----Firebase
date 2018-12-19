import { BranchService } from './../../services/branch.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  branch$;

  constructor(private branchService: BranchService) {
    this.branch$ = branchService.getAll();
   }


}
