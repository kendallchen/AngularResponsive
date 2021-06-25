import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
    
    private menuToggle = new Subject();
    menuToggle$ = this.menuToggle.asObservable();

    constructor() { 
    }

    //toggles menu when called
    toggleMenu(): Observable<unknown>{
        this.menuToggle.next();
        return this.menuToggle$;
    }

}