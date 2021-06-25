import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

  toggleMenu(){
      this.menuService.toggleMenu();
  }

}
