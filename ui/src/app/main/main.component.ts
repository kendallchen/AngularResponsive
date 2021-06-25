import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MenuService } from '../service/menu.service';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit { 

    showSideNav: boolean = false;
    @ViewChild('sidenav') sidenav: MatSidenav;

    constructor(private breakPointObserver: BreakpointObserver,
                private menuService: MenuService) { }

    ngOnInit(): void {
        this.breakPointObserver
            .observe(['(min-width: 768px)'])
            .subscribe((state: BreakpointState) => {
                this.showSideNav = state.matches;
            });

        this.menuService.menuToggle$.subscribe(()=>{
            this.sidenav.toggle();
        });
    }

}
