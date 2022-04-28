import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import emojioneDE from '@iconify/icons-emojione/flag-for-flag-germany';
import emojioneUS from '@iconify/icons-emojione/flag-for-flag-united-states';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icAssignment from '@iconify/icons-ic/twotone-assignment';
import icAssignmentTurnedIn from '@iconify/icons-ic/twotone-assignment-turned-in';
import icBallot from '@iconify/icons-ic/twotone-ballot';
import icBookmarks from '@iconify/icons-ic/twotone-bookmarks';
import icDescription from '@iconify/icons-ic/twotone-description';
import icDoneAll from '@iconify/icons-ic/twotone-done-all';
import icMenu from '@iconify/icons-ic/twotone-menu';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import icReceipt from '@iconify/icons-ic/twotone-receipt';
import icSearch from '@iconify/icons-ic/twotone-search';
import { map } from 'rxjs/operators';
import { Security } from 'src/app/utils/secutiry.utils';
import { MegaMenuComponent } from '../../components/mega-menu/mega-menu.component';
import { PopoverService } from '../../components/popover/popover.service';
import { ConfigService } from '../../services/config.service';
import { LayoutService } from '../../services/layout.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'vex-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() mobileQuery: boolean;

  @Input()
  @HostBinding('class.shadow-b')
  hasShadow: boolean;
  hasLogin: boolean = false;

  navigationItems = this.navigationService.items;

  isHorizontalLayout$ = this.configService.config$.pipe(map(config => config.layout === 'horizontal'));
  isVerticalLayout$ = this.configService.config$.pipe(map(config => config.layout === 'vertical'));
  isNavbarInToolbar$ = this.configService.config$.pipe(map(config => config.navbar.position === 'in-toolbar'));
  isNavbarBelowToolbar$ = this.configService.config$.pipe(map(config => config.navbar.position === 'below-toolbar'));

  icSearch = icSearch;
  icBookmarks = icBookmarks;
  emojioneUS = emojioneUS;
  emojioneDE = emojioneDE;
  icMenu = icMenu;
  icPersonAdd = icPersonAdd;
  icAssignmentTurnedIn = icAssignmentTurnedIn;
  icBallot = icBallot;
  icDescription = icDescription;
  icAssignment = icAssignment;
  icReceipt = icReceipt;
  icDoneAll = icDoneAll;
  icArrowDropDown = icArrowDropDown;

  constructor(private layoutService: LayoutService,
    private configService: ConfigService,
    private navigationService: NavigationService,
    private popoverService: PopoverService) { }

  ngOnInit() {
    let user = Security.getUser();
    if (user != undefined) this.hasLogin = true;
  }

  openQuickpanel() {
    this.layoutService.openQuickpanel();
  }

  openSidenav() {
    this.layoutService.openSidenav();
  }

  openMegaMenu(origin: ElementRef | HTMLElement) {
    this.popoverService.open({
      content: MegaMenuComponent,
      origin,
      position: [
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top'
        },
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
        },
      ]
    });
  }

  openSearch() {
    this.layoutService.openSearch();
  }
}
