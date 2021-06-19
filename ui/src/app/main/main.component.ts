import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';


@Component({
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit { 

    showSideNav: boolean = false;

    constructor(private breakPointObserver: BreakpointObserver) { }

    ngOnInit(): void {
        this.breakPointObserver
            .observe(['(min-width: 768px)'])
            .subscribe((state: BreakpointState) => {
                this.showSideNav = state.matches;
            });
    }

}
