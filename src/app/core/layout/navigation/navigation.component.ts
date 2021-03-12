import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnDestroy{
	mobileQuery: MediaQueryList;
	private _mobileQueryListener: () => void;
	public config: PerfectScrollbarConfigInterface = {};

  // constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private authService: AuthService, private router: Router) {
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
  	this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    // this.authService.logout()
    //   .subscribe(success => {
    //     if (success) {
    //       this.router.navigate(['/authentication']);
    //     }
    //   });
  }

}
