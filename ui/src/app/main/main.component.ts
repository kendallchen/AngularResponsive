import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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

    location: string = 'home';

    constructor(private breakPointObserver: BreakpointObserver,
                private menuService: MenuService,
                private router: Router) { }

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

    homeClick(){
        this.toggleMenu();
        this.router.navigate(['/']);
        this.location = 'home';
    }

    customerClick(){
        this.toggleMenu();
        this.router.navigate(['/customer']); 
        this.location = 'customer';
    }

    toggleMenu(){
        if (!this.showSideNav) //if small screen
            this.menuService.toggleMenu();
    }

}
